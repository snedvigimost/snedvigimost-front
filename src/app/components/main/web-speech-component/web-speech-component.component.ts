import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {merge, Observable, of, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {defaultLanguage, languages} from '../../../rest/STT/languages';
import {SpeechError} from '../../../rest/STT/enum/speech-error';
import {SpeechEvent} from '../../../rest/STT/enum/speech-event';
import {SpeechRecognizerService} from '../../../rest/STT/speech-recognizer.service';
// import {ActionContext} from '../shared/services/actions/action-context';
import {SpeechNotification} from '../../../rest/STT/enum/speech-notification';

@Component({
  selector: 'app-web-speech-component',
  templateUrl: './web-speech-component.component.html',
  styleUrls: ['./web-speech-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebSpeechComponentComponent implements OnInit {
  languages: string[] = languages;
  currentLanguage: string = defaultLanguage;
  totalTranscript?: string;
  @Output() finalContent = new EventEmitter<string>();

  transcript$?: Observable<string>;
  listening$?: Observable<boolean>;
  errorMessage$?: Observable<string>;
  defaultError$ = new Subject<string | undefined>();

  constructor(
    private speechRecognizer: SpeechRecognizerService,
    // private actionContext: ActionContext
  ) {
  }

  ngOnInit(): void {
    const webSpeechReady = this.speechRecognizer.initialize(this.currentLanguage);
    if (webSpeechReady) {
      this.initRecognition();
    } else {
      this.errorMessage$ = of('Your Browser is not supported. Please try Google Chrome.');
    }
  }

  start(): void {
    if (this.speechRecognizer.isListening) {
      this.stop();
      return;
    }

    this.defaultError$.next(undefined);
    this.speechRecognizer.start();
  }

  stop(): void {
    this.speechRecognizer.stop();
  }

  selectLanguage(language: string): void {
    if (this.speechRecognizer.isListening) {
      this.stop();
    }
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition(): void {
    this.transcript$ = this.speechRecognizer.onResult().pipe(
      tap((notification) => {
        this.processNotification(notification);
      }),
      map((notification) => notification.content || '')
    );

    this.listening$ = merge(
      this.speechRecognizer.onStart(),
      this.speechRecognizer.onEnd()
    ).pipe(map((notification) => notification.event === SpeechEvent.Start));

    this.errorMessage$ = merge(
      this.speechRecognizer.onError(),
      this.defaultError$
    ).pipe(
      map((data) => {
        if (data === undefined) {
          return '';
        }
        if (typeof data === 'string') {
          return data;
        }
        let message;
        switch (data.error) {
          case SpeechError.NotAllowed:
            message = `Cannot run the demo.
            Your browser is not authorized to access your microphone.
            Verify that your browser has access to your microphone and try again.`;
            break;
          case SpeechError.NoSpeech:
            message = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.AudioCapture:
            message = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            message = '';
            break;
        }
        return message;
      })
    );
  }

  private processNotification(notification: SpeechNotification<string>): void {
    if (notification.event === SpeechEvent.FinalContent) {
      const message = notification.content?.trim() || '';
      console.log(message);
      this.finalContent.emit(message);
      // this.actionContext.processMessage(message, this.currentLanguage);
      // // this.actionContext.runAction(message, this.currentLanguage);
      // this.totalTranscript = this.totalTranscript
      //   ? `${this.totalTranscript}\n${message}`
      //   : notification.content;
    }
  }
}

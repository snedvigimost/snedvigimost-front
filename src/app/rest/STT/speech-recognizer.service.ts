import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SpeechNotification} from "./enum/speech-notification";
import {SpeechEvent} from "./enum/speech-event";
import {SpeechError} from "./enum/speech-error";

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognizerService {
  recognition: SpeechRecognition;
  language: string;
  isListening = false;

  constructor() {
  }


  initialize(language: string): void {
    // @ts-ignore
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.setLanguage(language);
  }

  setLanguage(language: string): void {
    this.language = language;
    this.recognition.lang = language;
  }

  start(): void {
    this.recognition.start();
    this.isListening = true;
  }

  stop(): void {
    this.recognition.stop();
  }

  onStart(): Observable<SpeechNotification<never>> {
    if (!this.recognition) {
      this.initialize(this.language);
    }

    return new Observable(observer => {
      this.recognition.onstart = () => observer.next({
        event: SpeechEvent.Start
      });
    });
  }

  onEnd(): Observable<SpeechNotification<never>> {
    return new Observable(observer => {
      this.recognition.onend = () => {
        observer.next({
          event: SpeechEvent.End
        });
        this.isListening = false;
      };
    });
  }

  onResult(): Observable<SpeechNotification<string>> {
    return new Observable(observer => {
      this.recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interimContent = '';
        let finalContent = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalContent += event.results[i][0].transcript;
            observer.next({
              event: SpeechEvent.FinalContent,
              content: finalContent
            });
          } else {
            interimContent += event.results[i][0].transcript;
            observer.next({
              event: SpeechEvent.InterimContent,
              content: interimContent
            });
          }
        }
      };
    });
  }

  onError(): Observable<SpeechNotification<never>> {
    return new Observable(observer => {
      this.recognition.onerror = (event) => {
        const eventError: string = (event as any).error;
        let error: SpeechError;
        switch (eventError) {
          case 'no-speech':
            error = SpeechError.NoSpeech;
            break;
          case 'audio-capture':
            error = SpeechError.AudioCapture;
            break;
          case 'not-allowed':
            error = SpeechError.NotAllowed;
            break;
          default:
            error = SpeechError.Unknown;
            break;
        }

        observer.next({
          error
        });
      };
    });
  }
}

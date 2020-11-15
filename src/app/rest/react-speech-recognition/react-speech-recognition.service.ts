import {Injectable} from '@angular/core';
import RecognitionManager from './RecognitionManager';
import {BehaviorSubject, Subject} from 'rxjs';

let recognitionManager;

const SpeechRecognition = {
  counter: 0,
  getRecognitionManager: () => {
    if (!recognitionManager) {
      recognitionManager = new RecognitionManager();
    }
    return recognitionManager;
  },
  getRecognition: () => {
    // tslint:disable-next-line:no-shadowed-variable
    const recognitionManager = SpeechRecognition.getRecognitionManager();
    return recognitionManager.getRecognition();
  },
  // @ts-ignore
  startListening: async ({continuous, language} = {}) => {
    // tslint:disable-next-line:no-shadowed-variable
    const recognitionManager = SpeechRecognition.getRecognitionManager();
    await recognitionManager.startListening({continuous, language});
  },
  stopListening: async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const recognitionManager = SpeechRecognition.getRecognitionManager();
    await recognitionManager.stopListening();
  },
  abortListening: async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const recognitionManager = SpeechRecognition.getRecognitionManager();
    await recognitionManager.abortListening();
  },
  browserSupportsSpeechRecognition: () => {
    // tslint:disable-next-line:no-shadowed-variable
    const recognitionManager = SpeechRecognition.getRecognitionManager();
    return recognitionManager.browserSupportsSpeechRecognition;
  }
};


@Injectable({
  providedIn: 'root'
})
export class ReactSpeechRecognitionService {
  transcribing = true;
  clearTranscriptOnListen = true;
  commands = [];

  recognitionManager = SpeechRecognition.getRecognitionManager();
  listening = new BehaviorSubject<boolean>(this.recognitionManager.listening);

  constructor() {
    this.listening.subscribe(() => {
      this.recognitionManager.resetTranscript();
      this.clearTranscript();
    });
  }

  clearTranscript = () => {
    // dispatch(clearTrancript());
  }

//  TODO: https://github.com/JamesBrill/react-speech-recognition

}

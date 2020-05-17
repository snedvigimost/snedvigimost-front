import { Component, OnInit } from '@angular/core';
import { Dashboard, Dropbox, GoldenRetriever, GoogleDrive, Instagram } from 'uppy';

import { ImagesService } from '../../rest/images/images.service';
import { Uppy } from '@uppy/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  private uppy;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.uppy = new Uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        allowedFileTypes: ['image/*', 'video/*']
      }
    })
      .use(Dashboard, {
        trigger: '.UppyModalOpenerBtn',
        inline: true,
        target: '.DashboardContainer',
        replaceTargetContent: true,
        note: 'Images and video only, 2–3 files, up to 1 MB',
        maxHeight: 450,
        metaFields: [
          { id: 'license', name: 'License', placeholder: 'specify license' },
          {
            id: 'caption',
            name: 'Caption',
            placeholder: 'describe what the image is about'
          }
        ]
      })
      .use(Dropbox, { target: Dashboard, companionUrl: 'http://localhost:4888' })
      .use(GoogleDrive, { target: Dashboard, companionUrl: 'http://localhost:4888' })
      .use(Instagram, { target: Dashboard, companionUrl: 'http://localhost:4888' })
      .use(GoldenRetriever, {
        serviceWorker: true,
        indexedDB: {
          maxFileSize: 2 * 1024 * 1024 * 1024, // 2GB => Each file
          maxTotalSize: 1024 * 1024 * 1024 * 1024 // 1 TB
        }
      });

    this.uppy.on('complete', (result) => {
      console.log('successful files:', result.successful);
      const formData = new FormData();
      formData.append('photo', result.successful[0].data);
      this.imagesService.uploadImage(formData).subscribe(data => {
        console.log(data);
      });
      console.log('failed files:', result.failed);
    });

    const isServiceWorkerControllerReady = new Promise((resolve) => {
      if (navigator.serviceWorker.controller) {
        return resolve();
      }
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        return resolve();
      });
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.bundle.js')
        .then(() => {
          return isServiceWorkerControllerReady;
        })
        .then(() => {
        }).catch((error) => {
          console.log('Registration failed with ' + error);
        });
    }
  }

}

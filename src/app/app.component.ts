import {Component, OnInit} from '@angular/core';
import {FacebookService, InitParams} from "ngx-facebook";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

   constructor(private fb: FacebookService) {
  }


  ngOnInit() {
     const initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
     // this.fb.init(initParams);
  }


}

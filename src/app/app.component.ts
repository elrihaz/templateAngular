import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  constructor() {
    // Initialize Firebase
    const config = {
    apiKey: 'AIzaSyBq78XxSul5gRD9_UJdnRY5-ByObtPB9nc',
    authDomain: 'templateangular-6f2ae.firebaseapp.com',
    databaseURL: 'https://templateangular-6f2ae.firebaseio.com',
    projectId: 'templateangular-6f2ae',
    storageBucket: 'templateangular-6f2ae.appspot.com',
    messagingSenderId: '303148202996'
    };
    firebase.initializeApp(config);
  }
}

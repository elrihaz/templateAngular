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
      apiKey: 'AIzaSyBUm5Iv2_hvNTOcI1HRxb5edj8_eJBWim0',
      authDomain: 'templatemat.firebaseapp.com',
      databaseURL: 'https://templatemat.firebaseio.com',
      projectId: 'templatemat',
      storageBucket: 'templatemat.appspot.com',
      messagingSenderId: '1031797971169'
    };
    firebase.initializeApp(config);
  }
}

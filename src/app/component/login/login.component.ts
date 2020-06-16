import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public auth:AngularFireAuth,private firestore: AngularFirestore) { }

  ngOnInit() {

  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.firestore.collection('users').doc()
    
  }
  loginPhone() {
  }
  logout() {
    this.auth.signOut();
    console.log(auth().currentUser.uid);
  }
}

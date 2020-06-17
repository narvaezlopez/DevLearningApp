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
    this.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((result) => {
      this.firestore.collection('users').doc(result.user.uid)
      .set({
        name:result.user.displayName,
        email:result.user.email,
        phoneNumber:result.user.phoneNumber
      })
      console.log("Document successfully written!");
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });  
  }
  
  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
      console.log(user);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  logout() {

    this.auth.signOut();
  }
}

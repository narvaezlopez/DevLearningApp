import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

import { NavController } from '@ionic/angular';
import { Router,ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
const TOKEN_KEY = 'access_token';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(public auth:AngularFireAuth,private firestore: AngularFirestore, private authService:AuthService, 
              private storage: Storage, private helper: JwtHelperService, private navCtrl:NavController, private router:Router, 
              private storageService: StorageService) { }

  token: any[] = [];
  user = {
    email:'',
    password:''
  }
  EP:boolean=null;
  authenticationState = new BehaviorSubject(false);

  ngOnInit() {
    
  }

  loginMetod(bandera){
    this.EP=bandera;
  }

  onSubmit(){
    console.log('Form-Submit');
    this.loginEmailPassword(this.user.email,this.user.password);
  }

  loginGoogle() {
    this.loginMetod(false);
    this.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((result) => {
      console.log(result);
      this.authService.createcustomToken(result.user.uid)
      .subscribe((tokencito)=>{
        this.token=<any[]>tokencito['token'];
        this.storage.set('idUser', result.user.uid);
        console.log('token!');
        this.storage.set(TOKEN_KEY, this.token);
        this.user = this.helper.decodeToken(String(this.token));
        if(result.additionalUserInfo.isNewUser==true){
          this.firestore.collection('users').doc(result.user.uid)
          .set({
            name:result.user.displayName,
            email:result.user.email,
            phoneNumber:result.user.phoneNumber,
            nacionality:'',
            favoritelanguage:'',
            numberadvances:"",
            numberbadges:"",
            exppoints:"",
            acquiredskills:""
          })
        }
        this.router.navigate(['/menu/start']);
      })

      console.log(result);
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
    this.storage.remove('access_token');
    this.storage.remove('idUser');
    this.storage.remove('currentchallenge');
    this.storage.remove('currenttraining');
    this.storage.remove('state');
  //  this.storageService.logout();
  }

  Landing(){
    this.router.navigate(['']);
  }
  Menu(){
    this.router.navigate(['/menu/start']);
  }

}

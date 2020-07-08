import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  authenticationState = new BehaviorSubject(false);
  public userData$:Observable<firebase.User >;
  constructor(private storage: Storage, private router:Router,public auth:AngularFireAuth){
    this.userData$=auth.authState;
    console.log(this.userData$);
  }

  logout(): void {

  }
}
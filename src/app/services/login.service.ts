import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loginStatus:String;
  private loginStatusSubject = new Subject<String>();
  loginStatusObservable= this.loginStatusSubject.asObservable();

  sendTrackStatus(playing:String){
    console.log('servicio', playing)
    this.loginStatus=playing;
    this.loginStatusSubject.next(this.loginStatus);
  }
}

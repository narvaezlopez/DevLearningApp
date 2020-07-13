import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform, AlertController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  public url:string = 'https://devlearningapp.herokuapp.com/users/token';
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http:HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
     }

    createcustomToken(id:string){
      return this.http.get(this.url+'/'+id);
    }

}

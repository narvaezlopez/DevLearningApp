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

  constructor(private http:HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
     }

    public url:string = 'http://localhost:3000/users/token';
    user = null;
    authenticationState = new BehaviorSubject(false);

    createcustomToken(id:string){
      return this.http.get(this.url+'/'+id);
    }

    checkToken() {
      this.storage.get(TOKEN_KEY).then(token => {
        if (token) {
          let decoded = this.helper.decodeToken(token);
          let isExpired = this.helper.isTokenExpired(token);
   
          if (!isExpired) {
            this.user = decoded;
            this.authenticationState.next(true);
          } else {
            this.storage.remove(TOKEN_KEY);
          }
        }
      });
    }
   
    logout() {
      this.storage.remove(TOKEN_KEY).then(() => {
        this.authenticationState.next(false);
      });
    }
   
    isAuthenticated() {
      return this.authenticationState.value;
    }
   
    showAlert(msg) {
      let alert = this.alertController.create({
        message: msg,
        header: 'Error',
        buttons: ['OK']
      });
      alert.then(alert => alert.present());
    }

}

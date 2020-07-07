import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorageService;

  constructor( private storage: Storage, private router:Router,public auth:AngularFireAuth
  ) {
    this.localStorageService = localStorage;
    if (!this.isAuthenticated()) {
      this.logout();
    }
  }


  isAuthenticated(): boolean {
    this.storage.get('idUser').then((result)=>{
      console.log(result);
    }).catch()
    //return (this.storage.get != null)
    return (this.storage.get('idUser') != null);
  }

  logout(): void {
    // TODO: cerrar todos los dialogos
    // this._dialog.closeAll();
    this.auth.signOut();
    this.storage.remove('idUser').then(() => {
      this.router.navigate(['/login']);
    });
    
  }

}
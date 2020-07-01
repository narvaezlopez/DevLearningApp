import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storage: Storage, private router:Router,public auth:AngularFireAuth
  ){}

  logout(): void {
    // TODO: cerrar todos los dialogos
    // this._dialog.closeAll();
    this.auth.signOut();
    this.storage.remove('access_token');
    this.storage.remove('idUser')
    this.router.navigate(['/login']);
  }

}
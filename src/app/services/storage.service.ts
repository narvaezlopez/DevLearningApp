import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  x:boolean;
  private localStorageService;
  constructor(private storage: Storage, private router:Router,public auth:AngularFireAuth){

  }

  logout(): void {
    this.auth.signOut();
    this.storage.remove('access_token');
    this.storage.remove('idUser')
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {     
    console.log(this.storage.get('idUser'));     //return (this.storage.get != null)     
    this.storage.get('idUser')
    .then((valor)=>{
    this.x=valor;
      console.log(valor);
    }).catch((error)=>{
      console.log(error);
    })
    return (this.x!=null);
  }

}
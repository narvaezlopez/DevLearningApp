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

<<<<<<< HEAD
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
=======
>>>>>>> f10830f4dbd4d87839e5e4c21be3e762e0c19d99
  }

  logout(): void {
    this.auth.signOut();
<<<<<<< HEAD
    this.storage.remove('idUser').then(() => {
      this.router.navigate(['/login']);
    });
    
=======
    this.storage.remove('access_token');
    this.storage.remove('idUser')
    this.router.navigate(['/login']);
>>>>>>> f10830f4dbd4d87839e5e4c21be3e762e0c19d99
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
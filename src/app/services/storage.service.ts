import {Injectable} from '@angular/core';
import {Session} from '../models/session';
import {Users} from '../models/users';
import { Storage } from '@ionic/storage';

const CURRENT_USER = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorageService;

  constructor( private storage: Storage
  ) {
    this.localStorageService = localStorage;
    if (!this.isAuthenticated()) {
      this.logout();
    }
  }


  isAuthenticated(): boolean {
    console.log(this.storage);
    //return (this.storage.get != null)
    return (this.getCurrentToken() != null);
  }

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return (session && session.token) ? `${session.token}` : null;
  }

  getCurrentSession(): Session {
    return this.loadSessionData();
  }

  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem(CURRENT_USER);
    console.log(localStorage);
    return (sessionStr) ? JSON.parse(sessionStr) as Session : null;
  }

  logout(): void {
    // TODO: cerrar todos los dialogos
    // this._dialog.closeAll();
    this.localStorageService.removeItem(CURRENT_USER);
  }

}
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {StorageService} from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
      private storageService: StorageService,
      private router: Router
    ) {
    }
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.storageService.isAuthenticated()) {
        console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        return true;
      } else {
        console.log("falseeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        this.storageService.logout();
        this.router.navigate(['/login']);
        return false;
      }
    }

    
  }
  
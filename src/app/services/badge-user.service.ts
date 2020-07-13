import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BadgeUser } from '../models/badge-user';

@Injectable({
  providedIn: 'root'
})
export class BadgeUserService {

  constructor(private http:HttpClient) { }

  public url:string = 'https://devlearningapp.herokuapp.com/badge_user';

    
  getBadgesUsersO():Observable<BadgeUser[]>{
    return this.http.get<BadgeUser[]>(this.url);
  }

  getBadgesUsers(){
    return this.http.get(this.url);
  }

  getBadgeUserById(id:string){
    return this.http.get(this.url+'/'+id);
  }

  getBadgeUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

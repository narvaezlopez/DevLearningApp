import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public url:string = 'http://localhost:3000/Users';

    
  getUsersR():Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }
  getUsers(){
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public url:string = 'https://devlearningapp.herokuapp.com/Users';

    
  getUsersR():Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }
  getUsers(){
    return this.http.get(this.url);
  }


  getUserById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

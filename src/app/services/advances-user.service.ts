import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvancesUserService {

  public url:String='https://devlearningapp.herokuapp.com/advance_user'; 
  
  constructor(private http:HttpClient) { }

  getAdvanceUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

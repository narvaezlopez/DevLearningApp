import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvancesService {

  
  constructor(private http:HttpClient) { }

  public url:string='https://devlearningapp.herokuapp.com/advance';
  getAdvancesById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

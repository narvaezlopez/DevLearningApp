import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvancesService {

  
  constructor(private http:HttpClient) { }

  public url:string='http://localhost:3000/advance';
  getAdvancesById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

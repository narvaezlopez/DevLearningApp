import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  public url:string = 'https://devlearningapp.herokuapp.com/upload';

  constructor(private http:HttpClient) { }
  
  getUpload(){
    return this.http.get(this.url);
  }
  
  getUploadById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  public url:string = 'http://localhost:3000/upload';

  constructor(private http:HttpClient) { }
  
  getUpload(){
    return this.http.get(this.url);
  }
  
  getUploadById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

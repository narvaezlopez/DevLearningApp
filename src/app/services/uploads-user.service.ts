import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsUserService {

  public url:string = 'http://localhost:3000/upload_user';

  constructor(private http:HttpClient) { }

  getUploadsUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

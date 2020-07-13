import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsUserService {

  public url:string = 'https://devlearningapp.herokuapp.com/upload_user';

  constructor(private http:HttpClient) { }

  getUploadsUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

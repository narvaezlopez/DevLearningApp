import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingUser } from '../models/training-user';

@Injectable({
  providedIn: 'root'
})
export class TrainingsUserService {

  public url:string = 'https://devlearningapp.herokuapp.com/training_user';

  constructor(private http:HttpClient) { }

  getTrainingsUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

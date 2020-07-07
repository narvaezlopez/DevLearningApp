import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingUser } from '../models/training-user';

@Injectable({
  providedIn: 'root'
})
export class TrainingsUserService {

  public url:string = 'http://localhost:3000/training_user';

  constructor(private http:HttpClient) { }

  getTrainingUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

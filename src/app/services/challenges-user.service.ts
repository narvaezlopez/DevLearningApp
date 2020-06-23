import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChallengeUser } from '../models/challenge-user';
@Injectable({
  providedIn: 'root'
})
export class ChallengesUserService {

  public url:string = 'http://localhost:3000/challenge_user';

  constructor(private http:HttpClient) { }

  getChallengeUserByIdUser(id:string){
    return this.http.get(this.url+'/user/'+id);
  }
}

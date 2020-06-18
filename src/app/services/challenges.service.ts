import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private http:HttpClient) { }
  
  public url:string = 'http://localhost:3000/challenge';

  getChallengesO():Observable<Challenge[]>{
    return this.http.get<Challenge[]>(this.url);
  }
  getChallenges(){
    return this.http.get(this.url);
  }

  getChallengesById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

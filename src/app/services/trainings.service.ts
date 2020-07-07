import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http:HttpClient) { }

  public url:string = 'http://localhost:3000/training';

  getTrainigsO():Observable<Training[]>{
    return this.http.get<Training[]>(this.url);
  }
  getTrainings(){
    return this.http.get(this.url);
  }

  getTrainingsById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

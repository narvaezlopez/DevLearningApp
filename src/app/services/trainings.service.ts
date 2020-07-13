import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http:HttpClient) { }

  public url:string = 'https://devlearningapp.herokuapp.com/training';

  getTrainigsO():Observable<Training[]>{
    return this.http.get<Training[]>(this.url);
  }
  getTrainings(){
    return this.http.get(this.url);
  }

  getTrainingsById(id:string){
    return this.http.get(this.url+'/'+id);
  }

  getTrainingsByLanguage(id:string){
    return this.http.get(this.url+'/language/'+id);
  }
}



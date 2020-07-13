import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Badge } from '../models/badge';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http:HttpClient) { }

  public url:string = 'https://devlearningapp.herokuapp.com/badge';

    
  getBadgesO():Observable<Badge[]>{
    return this.http.get<Badge[]>(this.url);
  }
  getBadges(){
    return this.http.get(this.url);
  }

  getBadgesById(id:string){
    return this.http.get(this.url+'/'+id);
  }
}

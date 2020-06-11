import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Output } from '../models/output';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  public url:string = 'http://localhost:3000/console';
  constructor(private http:HttpClient) { }

  postExecute(){
    return this.http.post(this.url,{
      "clientId":"db58b57ea8b695f03a3e02e88315ef87",
      "clientSecret":"1b5b4656297925113cf9965ae03c964fc87ae8051f07e6c2ad9f0ba35448e2f7",
      "script":"<?php echo \"hello\"; ?>",
      "language": "php",
      "versionIndex": "0"
    });
  }

  postExecuteR(code:any,language:any):void{
    this.http.post(this.url,{
      "clientId":"db58b57ea8b695f03a3e02e88315ef87",
      "clientSecret":"1b5b4656297925113cf9965ae03c964fc87ae8051f07e6c2ad9f0ba35448e2f7",
      "script":code,
      "language": language,
      "versionIndex": "0"
    }).subscribe((response) => {
      console.log(response);
      console.log(code);
  });;
  }
}

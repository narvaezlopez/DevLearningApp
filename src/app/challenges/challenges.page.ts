import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../services/console.service';
import { Output } from '../models/output';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {

  out:Output;

  constructor(private consoleService:ConsoleService) { }

  ngOnInit() {
   
  }

  compile(){
    this.consoleService.postExecuteR();
  }

}

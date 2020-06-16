import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../services/console.service';
import { Output } from '../models/output';
import { ToastController, AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {

  out:Output;
  color:string = 'Dark';
  inputCode:string= null;
  language:string = null;

  challenges: any[]=[];

  constructor(private consoleService:ConsoleService,private alert:AlertController, 
              private toast:ToastController, private firestore: AngularFirestore,
              public auth:AngularFireAuth) { }

  ngOnInit() {
    this.firestore.collection('challenge').valueChanges()
    .subscribe((challenges)=>{
      this.challenges=<any[]>challenges;
    })
  }

  async compile(){
    if(this.language==null){
      const toast = await this.toast.create({
        duration:3000,
        header:'Ooop! you forget something!',
        position:'bottom',
        message: 'Please select a programing language.',
      });
      toast.present();
    }else{
      if(this.inputCode==''){
        const toast = await this.toast.create({
          duration:3000,
          header:'Ooop! you forget something!',
          position:'bottom',
          message: 'Please typing your code.',
        });
        toast.present();
      }else{
        const toast = await this.toast.create({
          duration:3000,
          header:'Compiled successfully!',
          position:'bottom',
          message: ':D',
        });
        toast.present();
      this.consoleService.postExecuteR(this.inputCode, this.language);
      }
    }
    
  }

  onChangeColor($event){
    this.color = $event.target.value;
    console.log($event.target.value);
  }

  SelectLanguage($event){
    this.language=$event.target.value;
    console.log($event.target.value);
  }

}

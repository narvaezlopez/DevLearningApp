import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Output } from '../../models/output';
import { ToastController, AlertController, IonInput } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ChallengesUserService } from 'src/app/services/challenges-user.service';
import { ChallengesService } from 'src/app/services/challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'My Challenges',
      url: 'mychallenges',
      icon: 'https://image.flaticon.com/icons/svg/1693/1693487.svg'
    },
    {
      title: 'Community Challenges',
      url: 'communitychallenges',
      icon: 'https://image.flaticon.com/icons/svg/2646/2646823.svg'
    }

  ];


  challenges: any[]=[];
  
  section:string;

  //option my challenges
  challenges_users: any[] = [];
  mychallenges: any[] = [];

  //section console
  currentchallenge: any;
  out:any;
  color:string = 'Dark';
  color2:string = 'Dark2';
  inputCode:string= null;
  consola:string;
  language:string = null;
  result:string;
  cputime:string;
  memory:string;


  constructor(private consoleService:ConsoleService,private alert:AlertController, 
              private toast:ToastController, private firestore: AngularFirestore,
              public auth:AngularFireAuth, private challengesUserService:ChallengesUserService, 
              private challengesService:ChallengesService) { }

  ngOnInit() {
        //My challenges
        this.challengesUserService.getChallengeUserByIdUser('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
        .subscribe((challenges_users) => {
          this.challenges_users = <any[]>challenges_users;
          console.log(challenges_users);

          this.challenges_users.forEach(element => {
            this.challengesService.getChallengesById(element['challenge']).subscribe((challenges) => {
              this.mychallenges.push(challenges);
              console.log(challenges);
            });

          });
        });
         //Community challenges
         this.firestore.collection('challenge').valueChanges()
         .subscribe((challenges)=>{
           this.challenges=<any[]>challenges;
         });

         //Challenge console
         this.firestore.collection('challenge').doc('XvKwVArIL4belNfz0CQ4').valueChanges()
         .subscribe((currentchallenge)=>{
          this.currentchallenge=<any>currentchallenge;
          console.log(this.currentchallenge);
         })
  }
  ionViewWillEnter(){
    this.section="General";
  }

  segmentChanged($event) {
    this.section=$event.target.value;
  }

  //console
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
        this.consoleService.postExecuteR(this.inputCode, this.language)
        .subscribe((salida)=>{
          this.out=salida;
          console.log(this.out);
          this.result=this.out.output;
          this.memory=this.out.memory;
          this.cputime=this.out.cpuTime;
          console.log(this.result+this.memory+this.cputime);
        });
      }
    }
    
  }

  onChangeColor($event){
    this.color = $event.target.value;
    this.color2=$event.target.value+"2";
    console.log(this.color2);
  }

    SelectLanguage($event){
    this.language=$event.target.value;
    console.log($event.target.value);
  }

}

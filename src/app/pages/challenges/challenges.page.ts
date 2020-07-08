import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Output } from '../../models/output';
import { ToastController, AlertController, IonInput } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ChallengesUserService } from 'src/app/services/challenges-user.service';
import { ChallengesService } from 'src/app/services/challenges.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {

  challenges: any[]=[];
  
  state:boolean=false;
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
              private challengesService:ChallengesService, private localstorage: Storage,private router:Router) { }

  ngOnInit() {
        //My challenges ionic g services services/advancesUser
        this.localstorage.get('idUser').then((res) => {
              this.challengesUserService.getChallengeUserByIdUser(res)
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
        });
         //Community challenges
         /*this.firestore.collection('challenge').valueChanges()
         .subscribe((challenges)=>{
           this.challenges=<any[]>challenges;
           console.log(this.challenges);
         });*/
         this.challengesService.getChallenges()
         .subscribe((challenges)=>{
          this.challenges=<any[]>challenges;
          console.log(this.challenges);
         })

         //Challenge console
         this.localstorage.get('currentchallenge')
         .then((id)=>{
              this.firestore.collection('challenge').doc(id).valueChanges()
            .subscribe((currentchallenge)=>{
              this.currentchallenge=<any>currentchallenge;
              console.log(this.currentchallenge);
            })
         })
         .catch(()=>{
            this.currentchallenge={objective:";D",
            content:":)",
            expectoutput:":D",
            icon:"https://vignette.wikia.nocookie.net/metalslug/images/e/e4/Fbig.gif/revision/latest/top-crop/width/220/height/220?cb=20110521014514&path-prefix=es",
            language:"",
            id:"",
            level:"",
            task:"",
            title:"Select a challenge in your my challenge list!"};
         })
         
  }
  ionViewWillEnter(){
    this.section="CommunityChallenges";
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

  gotochallenge(id:string){
    this.state=true;
    this.firestore.collection('challenge').doc(id).valueChanges()
    .subscribe((currentchallenge)=>{
      this.currentchallenge=<any>currentchallenge;
      console.log(this.currentchallenge);
    })
    this.section="Console";
    this.localstorage.set('currentchallenge',id);
    console.log(id);
    this.localstorage.get('idUser')
    .then((user)=>{
      this.firestore.collection('challenge_user')
      .add({
        user: user,
        challenge: id
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }
}

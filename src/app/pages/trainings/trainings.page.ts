import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Output } from '../../models/output';
import { ToastController, AlertController, IonInput } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { TrainingsUserService } from 'src/app/services/trainings-user.service';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  trainings: any[]=[];
  
  languagesJava: any[]=[];
  languagesCsharp: any[]=[];
  languagesPhp: any[]=[];

  // -- option my trainings
  trainings_users: any[] = [];
  mytrainings: any[] = [];

  section:string;
  
  constructor(private consoleService:ConsoleService,private alert:AlertController,
              private toast:ToastController, private firestore: AngularFirestore,
              public auth:AngularFireAuth, private trainingsUserService:TrainingsUserService, 
              private trainingsService: TrainingsService, private localstorage: Storage,private router:Router) { }

  ngOnInit() {
    // get trainings // useless
    this.firestore.collection('training').valueChanges()
    .subscribe((trainings)=>{
      this.trainings=<any[]>trainings;
    }) 
    // -- get trainings by language -- CSharp --
    this.trainingsService.getTrainingsByLanguage('CSharp')
    .subscribe((trainings)=>{
      this.languagesCsharp=<any[]>trainings;
    }) 
    // -- get trainings by language -- Java --
    this.trainingsService.getTrainingsByLanguage('Java')
    .subscribe((trainings)=>{
      this.languagesJava=<any[]>trainings;
    }) 
    // -- get trainings by language -- Php --
    this.trainingsService.getTrainingsByLanguage('Php')
    .subscribe((trainings)=>{
      this.languagesPhp=<any[]>trainings;
    }) 

    //My challenges ionic g services services/advancesUser
    this.localstorage.get('idUser').then((res) => {
      this.trainingsUserService.getTrainingUserByIdUser(res)
      .subscribe((trainings_users) => {
        this.trainings_users = <any[]>trainings_users;
        console.log(trainings_users);

        this.trainings_users.forEach(element => {
          this.trainingsService.getTrainingsById(element['training']).subscribe((trainings) => {
            this.mytrainings.push(trainings);
            console.log(trainings);
          });

        });
      });
});
  }


  ionViewWillEnter(){
    this.section="CSharp";
  }

  segmentChanged($event) {
    this.section=$event.target.value;
  }

}

import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Output } from '../../models/output';
import { ToastController, AlertController, IonInput } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { TrainingsUserService } from 'src/app/services/trainings-user.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  trainings: any[]=[];
  
  languagesJava: any[]=[];
  languagesCsharp: any[]=[];

  section:string;
  
  constructor(public firestore: AngularFirestore,
              private trainingService: TrainingsService) { }

  ngOnInit() {
    // get trainings
    this.firestore.collection('training').valueChanges()
    .subscribe((trainings)=>{
      this.trainings=<any[]>trainings;
    }) 
    
    // -- get trainings by language -- Java --
    this.trainingService.getTrainingsByLanguage('Java')
    .subscribe((trainings)=>{
      this.languagesJava=<any[]>trainings;
    }) 

    // -- get trainings by language -- CSharp --
    this.trainingService.getTrainingsByLanguage('CSharp')
    .subscribe((trainings)=>{
      this.languagesCsharp=<any[]>trainings;
    }) 
  }


  ionViewWillEnter(){
    this.section="CSharp";
  }

  segmentChanged($event) {
    this.section=$event.target.value;
  }

}

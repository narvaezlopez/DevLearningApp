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

  //heroes: Observable<any[]>;
  trainings: any[]=[];

  section:string;
  
  constructor(public firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('training').valueChanges()
    .subscribe((trainings)=>{
      this.trainings=<any[]>trainings;
    })  
  }
  ionViewWillEnter(){
    this.section="CSharp";
  }
  segmentChanged($event) {
    this.section=$event.target.value;
  }

}

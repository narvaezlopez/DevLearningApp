import { Component, OnInit } from '@angular/core';

import { ToastController, AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-communitychallenges',
  templateUrl: './communitychallenges.page.html',
  styleUrls: ['./communitychallenges.page.scss'],
})
export class CommunitychallengesPage implements OnInit {

  challenges: any[]=[];

  constructor(private alert:AlertController, 
              private toast:ToastController, private firestore: AngularFirestore,
              public auth:AngularFireAuth) { }

  ngOnInit() {
    this.firestore.collection('challenge').valueChanges()
    .subscribe((challenges)=>{
      this.challenges=<any[]>challenges;
    })
  }
}

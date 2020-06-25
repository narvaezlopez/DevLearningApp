import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../services/console.service';
import { Output } from '../../models/output';
import { ToastController, AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-communitychallenges',
  templateUrl: './communitychallenges.page.html',
  styleUrls: ['./communitychallenges.page.scss'],
})
export class CommunitychallengesPage implements OnInit {

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
}

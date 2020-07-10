import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.page.html',
  styleUrls: ['./currenttraining.page.scss'],
})
export class CurrenttrainingPage implements OnInit {

  currenttraining:any [] = [];
  constructor(private firestore: AngularFirestore, private localstorage: Storage) { }

  ngOnInit() {
    this.localstorage.get('currenttraining')
    .then((id)=>{
      this.firestore.collection('training').doc(id).valueChanges()
      .subscribe((data)=>{
        this.currenttraining=<any[]>data;
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.page.html',
  styleUrls: ['./advances.page.scss'],
})
export class AdvancesPage implements OnInit {

  constructor(public firestore: AngularFirestore) { }
  advances: any[]=[];

  ngOnInit() {
    this.firestore.collection('advances').valueChanges()
    .subscribe((advances)=>{
      this.advances=<any[]>advances;
    })  
  }

}

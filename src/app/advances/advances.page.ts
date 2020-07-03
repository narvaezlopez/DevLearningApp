import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.page.html',
  styleUrls: ['./advances.page.scss'],
})
export class AdvancesPage implements OnInit {

  //advances: Observable<any[]>;
  advances: any[] = [];

  constructor(public firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('advances').valueChanges()
      .subscribe((advances) => {
        this.advances = <any[]>advances;
      })
  }

}

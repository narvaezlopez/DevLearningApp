import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  //heroes: Observable<any[]>;
  heroes: any[]=[];
  section:string;

  constructor(public firestore: AngularFirestore) { 
    //this.heroes = firestore.collection('heroes').valueChanges();

  }

  ngOnInit() {
        this.firestore.collection('heroes').valueChanges()
    .subscribe((heroes)=>{
      this.heroes=<any[]>heroes;
    })  
  }
  ionViewWillEnter(){
    this.section="CSharp";
  }
  segmentChanged($event) {
    this.section=$event.target.value;
  }
  


}

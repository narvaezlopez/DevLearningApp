import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  users: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
        this.firestore.collection('users').valueChanges()
        .subscribe((users)=>{
          this.users = <any[]>users;
          console.log(users);
        })
  }

}

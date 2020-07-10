import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  user: any[] = [];
  advances:any[]=[];
  constructor(private storage: Storage,
              private userService: UsersService,
              public auth: AngularFireAuth,private firestore: AngularFirestore) { }

 

  ngOnInit() {
    this.storage.get('idUser').then((res) => {
      this.userService.getUserById(res)
        .subscribe((user) => {
          this.user = <any[]>user['user_database'];
        });
    });
    this.firestore.collection('advances').valueChanges()
    .subscribe((advances)=>{
      this.advances=<any[]>advances;
    })
  }

}

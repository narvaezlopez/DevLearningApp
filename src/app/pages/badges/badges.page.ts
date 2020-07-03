import { Component, OnInit } from '@angular/core';
import { BadgeUserService } from '../../services/badge-user.service';
import { BadgesService } from '../../services/badges.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  badges_users: any[] = [];
  badges: any[] = [];

  constructor(private badgeUserService: BadgeUserService, private badgeService: BadgesService,
    private firestore: AngularFirestore, private storage: Storage) { }

  //RDdHIsiP5ChIUiipTEYPyL4wuuH2
  ngOnInit() {

    this.storage.get('idUser').then((res) => {
      
      this.badgeUserService.getBadgeUserByIdUser(res)
        .subscribe((badges_users) => {
          this.badges_users = <any[]>badges_users;
          console.log(res);

          this.badges_users.forEach(element => {
            this.badgeService.getBadgesById(element['badge']).subscribe((badges) => {
              this.badges.push(badges);
              console.log(badges);
            });
          });
        });

    });


    /*
       this.firestore.collection('badge_user').valueChanges().subscribe((badges)=>{
         this.badges = <any[]>badges;
       });*/
  }

}

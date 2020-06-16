import { Component, OnInit } from '@angular/core';
import { BadgeUserService } from '../services/badge-user.service';
import { BadgesService } from '../services/badges.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  badges_users: any[] = [];
  badges: any[] = [];
  constructor(private badgeUserService: BadgeUserService, private badgeService: BadgesService) { }

  //RDdHIsiP5ChIUiipTEYPyL4wuuH2
  ngOnInit() {
    this.badgeUserService.getBadgeUserByIdUser('RDdHIsiP5ChIUiipTEYPyL4wuuH2').subscribe((badges_users) => {
      this.badges_users = <any[]>badges_users;
      console.log(badges_users);

      this.badges_users.forEach(element => {
        this.badgeService.getBadgesById(element['badge']).subscribe((badges) => {
          this.badges.push(badges);
          console.log(badges);
        });

      });


    });


  }

}

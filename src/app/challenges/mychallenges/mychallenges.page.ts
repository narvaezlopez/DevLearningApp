import { Component, OnInit } from '@angular/core';
import { ChallengesUserService } from '../../services/challenges-user.service';
import { ChallengesService } from '../../services/challenges.service';

@Component({
  selector: 'app-mychallenges',
  templateUrl: './mychallenges.page.html',
  styleUrls: ['./mychallenges.page.scss'],
})
export class MychallengesPage implements OnInit {

  challenges_users: any[] = [];
  challenges: any[] = [];

  constructor(private challengesUserService:ChallengesUserService, private challengesService:ChallengesService) { }

  ngOnInit() {

    this.challengesUserService.getChallengeUserByIdUser('RDdHIsiP5ChIUiipTEYPyL4wuuH2')
    .subscribe((challenges_users) => {
      this.challenges_users = <any[]>challenges_users;
      console.log(challenges_users);

      this.challenges_users.forEach(element => {
        this.challengesService.getChallengesById(element['challenge']).subscribe((challenges) => {
          this.challenges.push(challenges);
          console.log(challenges);
        });

      });


    });

  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdvancesUserService } from 'src/app/services/advances-user.service';
import { AdvancesService } from 'src/app/services/advances.service';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.page.html',
  styleUrls: ['./advances.page.scss'],
})
export class AdvancesPage implements OnInit {

  constructor(public firestore: AngularFirestore, private advancesUserService:AdvancesUserService, 
              private advancesService:AdvancesService) { }

  advances: any[]=[];
  advances_users: any[] = [];

  ngOnInit() {
    this.advancesUserService.getAdvanceUserByIdUser('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
    .subscribe((advances_users) => {
      this.advances_users = <any[]>advances_users;
      console.log(advances_users);

      this.advances_users.forEach(element => {
        this.advancesService.getAdvancesById(element['advance']).subscribe((advances) => {
          this.advances.push(advances);
          console.log(this.advances);
        });

      });
    });
  }

}

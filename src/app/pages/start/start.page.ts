import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  user: any[] = [];

  constructor(private storage: Storage,
              private userService: UsersService,
              public auth: AngularFireAuth) { }

  ngOnInit() {
    this.storage.get('idUser').then((res) => {
      this.userService.getUserById(res)
        .subscribe((user) => {
          this.user = <any[]>user['user_database'];
        });
    });
  }

}

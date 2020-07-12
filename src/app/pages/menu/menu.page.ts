import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadsService } from '../../services/uploads.service';
import { UploadsUserService } from '../../services/uploads-user.service';
import { UsersService } from '../../services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rootPage = LoginPage;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/menu/start',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614724.svg'
    },
    {
      title: 'Account',
      url: '/menu/account',
      icon: 'https://www.flaticon.com/premium-icon/icons/svg/2316/2316176.svg'
    },
    {
      title: 'Trainings',
      url: '/menu/trainings',
      icon: 'https://image.flaticon.com/icons/svg/2646/2646823.svg'
    },
    {
      title: 'Challenges ',
      url: '/menu/challenges',
      icon: 'https://image.flaticon.com/icons/svg/1693/1693487.svg'
    },
    {
      title: 'Advances',
      url: '/menu/advances',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614615.svg'
    },
    {
      title: 'Badges',
      url: '/menu/badges',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2378/2378384.svg'
    },
    {
      title: 'Team',
      url: '/menu/team',
      icon: 'https://image.flaticon.com/icons/svg/2070/2070319.svg'
    }

  ];

  user: any[] = [];
  uploads_user: any[] = [];
  idparam: string;
  url: string;
  upload: any;

  constructor(
    private storage: Storage,
    private uploadService: UploadsService,
    private uploadsUserService: UploadsUserService,
    private userService: UsersService,
    public auth: AngularFireAuth,
    private storageService: StorageService,
    private router:Router,
  ) {

  }

  ngOnInit() {

    this.storage.get('idUser').then((res) => {
      this.userService.getUserById(res)
        .subscribe((user) => {
          this.user = <any[]>user['user_database'];
        });

      this.uploadsUserService.getUploadsUserByIdUser(res)
        .subscribe((info) => {
          this.uploads_user = <any[]>info;
          this.idparam = this.uploads_user[0].upload;
          this.uploadService.getUploadById(this.idparam)
            .subscribe((info) => {
              this.upload = <any>info;
              this.url = this.upload.photo;
            });
        });
    });

  }

  logout() {
    this.auth.signOut();
    this.storage.remove('access_token');
    this.storage.remove('idUser');
    this.storage.remove('currentchallenge');
    this.storage.remove('currenttraining');
    this.storage.remove('state');
    this.router.navigate(['/login']);
  }

}

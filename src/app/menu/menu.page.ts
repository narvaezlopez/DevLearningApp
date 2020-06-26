import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

import { NavController, NavParams } from '@ionic/angular';
import { Router,ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadsService } from '../services/uploads.service';
import { UploadsUserService } from '../services/uploads-user.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  rootPage=LoginPage;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Account',
      url: '/menu/account',
      icon: 'https://image.flaticon.com/icons/svg/2328/2328666.svg'
    },
    {
      title: 'Challenges ',
      url: '/menu/challenges',
      icon: 'https://image.flaticon.com/icons/svg/1693/1693487.svg'
    },
    {
      title: 'Trainings',
      url: '/menu/trainings',
      icon: 'https://image.flaticon.com/icons/svg/2646/2646823.svg'
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
      icon: 'https://image.flaticon.com/icons/svg/2614/2614724.svg'
    }
  ];

  user: any[]= [];
  uploads_user: any[]=[];
  idparam:string;
  url:string;
  upload: any;

  constructor(
    private menu: MenuController,   
    private route:ActivatedRoute,
    private router:Router,
    private storage: Storage,
    private localstorage:Storage,
    private firestore: AngularFirestore, 
    private uploadService:UploadsService,
    private uploadsUserService:UploadsUserService,
    private userService:UsersService
    ) { 
    
  }


  ngOnInit() {
  
    this.userService.getUserById('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
    .subscribe((user)=>{
      this.user=<any[]>user['user_database'];

    });

    this.uploadsUserService.getUploadsUserByIdUser('r5eHBQ2VvugPFfO9zbLAgWj7BQG3')
    .subscribe((info)=>{
      console.log(info);
      this.uploads_user=<any[]>info;
      this.idparam=this.uploads_user[0].upload;
      console.log(this.idparam);
      this.uploadService.getUploadById(this.idparam)
      .subscribe((info)=>{
        this.upload=<any>info;
        this.url=this.upload.photo;
      });
    });
  }

}

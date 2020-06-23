import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

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
      url: '/folder/Favorites',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614615.svg'
    },
    {
      title: 'Badges',
      url: '/menu/badges',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2378/2378384.svg'
    },
    {
      title: 'Team',
      url: '/folder/Spam',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614724.svg'
    }
  ];

  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }

}

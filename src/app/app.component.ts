import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, NavParams } from '@ionic/angular';
import { Router,ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

/**App Module
 *Importar modulo 
 Paso 0: Agregarlo
 App Component
 Paso 1: Import
 Paso 2: Ctor
 Paso 3: Usar
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Account',
      url: '/account',
      icon: 'https://image.flaticon.com/icons/svg/2328/2328666.svg'
    },
    {
      title: 'Challenges ',
      url: '/challenges',
      icon: 'https://image.flaticon.com/icons/svg/1693/1693487.svg'
    },
    {
      title: 'Trainings',
      url: '/trainings',
      icon: 'https://image.flaticon.com/icons/svg/2646/2646823.svg'
    },
    {
      title: 'Advances',
      url: '/folder/Favorites',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614615.svg'
    },
    {
      title: 'Badges',
      url: '/badges',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2378/2378384.svg'
    },
    {
      title: 'Team',
      url: '/folder/Spam',
      icon: 'https://image.flaticon.com/icons/svg/2614/2614724.svg'
    }
  ];

  bool:string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route:ActivatedRoute,
    private router:Router,
    private storage: Storage
  ) {
    this.initializeApp();
    this.route.queryParams
    .subscribe((params)=>{
      this.bool=params.bool;
      console.log(params.bool);
      this.storage.set('bool', "true");

    });
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
  ngOnInit() {
    

    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}

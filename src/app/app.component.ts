import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//new packages
import { NavController, NavParams } from '@ionic/angular';
import { Router,ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { timer } from 'rxjs'
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

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
  showSplash=true;

  bool:string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private storageService:StorageService,
    private route:Router
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash = false);
      
    });
    
  }
  ngOnInit() {
  }

}

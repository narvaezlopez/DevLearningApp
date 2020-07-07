import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//New packages

import { HttpClientModule } from '@angular/common/http';
import { Storage,IonicStorageModule} from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

export function jwtOptionsFactory(storage){
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelisteDomains:['localhost:5000']
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),// propiedades de la base de datos en firebase
    BrowserModule, 
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory:jwtOptionsFactory,
        deps: [Storage]
      }
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

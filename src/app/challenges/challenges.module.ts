import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengesPageRoutingModule } from './challenges-routing.module';

import { ChallengesPage } from './challenges.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengesPageRoutingModule
  ],
  declarations: [ChallengesPage]
})
export class ChallengesPageModule {}

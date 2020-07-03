import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingsPageRoutingModule } from './trainings-routing.module';

import { TrainingsPage } from './trainings.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingsPageRoutingModule
  ],
  declarations: [TrainingsPage]
})
export class TrainingsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancesPageRoutingModule } from './advances-routing.module';

import { AdvancesPage } from './advances.page';
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
    AdvancesPageRoutingModule
  ],
  declarations: [AdvancesPage]
})
export class AdvancesPageModule {}

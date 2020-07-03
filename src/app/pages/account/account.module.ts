import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [AccountPage],
  providers: [
    { provide: BUCKET, useValue: 'devlearning-2c9c9.appspot.com' }
  ]
})
export class AccountPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrenttrainingPageRoutingModule } from './currenttraining-routing.module';

import { CurrenttrainingPage } from './currenttraining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrenttrainingPageRoutingModule
  ],
  declarations: [CurrenttrainingPage]
})
export class CurrenttrainingPageModule {}

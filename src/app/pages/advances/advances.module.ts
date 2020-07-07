import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancesPageRoutingModule } from './advances-routing.module';

import { AdvancesPage } from './advances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancesPageRoutingModule
  ],
  declarations: [AdvancesPage]
})
export class AdvancesPageModule {}

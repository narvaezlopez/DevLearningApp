import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MychallengesPageRoutingModule } from './mychallenges-routing.module';

import { MychallengesPage } from './mychallenges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MychallengesPageRoutingModule
  ],
  declarations: [MychallengesPage]
})
export class MychallengesPageModule {}

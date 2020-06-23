import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunitychallengesPageRoutingModule } from './communitychallenges-routing.module';

import { CommunitychallengesPage } from './communitychallenges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunitychallengesPageRoutingModule
  ],
  declarations: [CommunitychallengesPage]
})
export class CommunitychallengesPageModule {}

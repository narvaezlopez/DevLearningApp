import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MychallengesPage } from './mychallenges.page';

const routes: Routes = [
  {
    path: '',
    component: MychallengesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MychallengesPageRoutingModule {}

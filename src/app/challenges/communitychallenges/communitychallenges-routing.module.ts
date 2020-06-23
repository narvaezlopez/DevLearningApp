import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunitychallengesPage } from './communitychallenges.page';

const routes: Routes = [
  {
    path: '',
    component: CommunitychallengesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunitychallengesPageRoutingModule {}

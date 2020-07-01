import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesPage } from './challenges.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengesPage,
    children:[
      {
        path:'tab1',
        loadChildren: () => import('../mychallenges/mychallenges.module').then( m => m.MychallengesPageModule)
      },
      {
        path:'tab2',
        loadChildren: () => import('../communitychallenges/communitychallenges.module').then( m => m.CommunitychallengesPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesPageRoutingModule {}

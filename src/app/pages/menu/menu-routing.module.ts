import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'challenges',
        loadChildren: () => import('../challenges/challenges.module').then( m => m.ChallengesPageModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('../trainings/trainings.module').then( m => m.TrainingsPageModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('../badges/badges.module').then( m => m.BadgesPageModule)
      },
      {
        path: 'team',
        loadChildren: () => import('../team/team.module').then( m => m.TeamPageModule)
      },
      {
        path: 'advances',
        loadChildren: () => import('../advances/advances.module').then( m => m.AdvancesPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

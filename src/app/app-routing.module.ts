import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('../app/pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'challenges',
    loadChildren: () => import('../app/pages/challenges/challenges.module').then( m => m.ChallengesPageModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/pages/landing/landing.module').then( m => m.LandingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

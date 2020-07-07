import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/login/auth.guard';

const routes: Routes = [
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
<<<<<<< HEAD
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
=======
    loadChildren: () => import('../app/pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/pages/signup/signup.module').then( m => m.SignupPageModule)
>>>>>>> f10830f4dbd4d87839e5e4c21be3e762e0c19d99
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

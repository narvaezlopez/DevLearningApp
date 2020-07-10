import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrenttrainingPage } from './currenttraining.page';

const routes: Routes = [
  {
    path: '',
    component: CurrenttrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenttrainingPageRoutingModule {}

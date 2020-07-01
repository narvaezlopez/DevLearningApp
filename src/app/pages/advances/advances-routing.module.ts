import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancesPage } from './advances.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancesPageRoutingModule {}

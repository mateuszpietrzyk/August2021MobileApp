import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GadgetsPage } from './gadgets.page';

const routes: Routes = [
  {
    path: '',
    component: GadgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GadgetsPageRoutingModule {}

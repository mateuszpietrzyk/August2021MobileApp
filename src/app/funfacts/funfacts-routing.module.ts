import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunfactsPage } from './funfacts.page';

const routes: Routes = [
  {
    path: '',
    component: FunfactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunfactsPageRoutingModule {}

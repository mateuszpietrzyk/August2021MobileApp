import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunfactsPageRoutingModule } from './funfacts-routing.module';

import { FunfactsPage } from './funfacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunfactsPageRoutingModule
  ],
  declarations: [FunfactsPage]
})
export class FunfactsPageModule {}

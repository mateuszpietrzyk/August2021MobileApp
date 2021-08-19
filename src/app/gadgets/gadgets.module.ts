import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GadgetsPageRoutingModule } from './gadgets-routing.module';

import { GadgetsPage } from './gadgets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadgetsPageRoutingModule
  ],
  declarations: [GadgetsPage]
})
export class GadgetsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaSonoroPageRoutingModule } from './alerta-sonoro-routing.module';

import { AlertaSonoroPage } from './alerta-sonoro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaSonoroPageRoutingModule
  ],
  declarations: [AlertaSonoroPage]
})
export class AlertaSonoroPageModule {}

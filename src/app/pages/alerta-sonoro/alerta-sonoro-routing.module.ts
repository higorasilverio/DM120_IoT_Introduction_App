import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertaSonoroPage } from './alerta-sonoro.page';

const routes: Routes = [
  {
    path: '',
    component: AlertaSonoroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertaSonoroPageRoutingModule {}

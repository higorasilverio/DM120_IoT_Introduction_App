import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "temperature",
    loadChildren: () =>
      import("./pages/temperature/temperature.module").then(
        (m) => m.TemperaturePageModule
      ),
  },
  {
    path: "luminosidade",
    loadChildren: () =>
      import("./pages/luminosidade/luminosidade.module").then(
        (m) => m.LuminosidadePageModule
      ),
  },
  {
    path: "umidade",
    loadChildren: () =>
      import("./pages/umidade/umidade.module").then((m) => m.UmidadePageModule),
  },
  {
    path: 'alerta-sonoro',
    loadChildren: () => import('./pages/alerta-sonoro/alerta-sonoro.module').then( m => m.AlertaSonoroPageModule)
  },
  {
    path: 'color',
    loadChildren: () => import('./pages/color/color.module').then( m => m.ColorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

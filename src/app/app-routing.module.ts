import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

      {
        path: '',
        loadChildren: () =>
          import('./pages/menu-admin/menu-admin.module').then((m) => m.MenuAdminModule),
      },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

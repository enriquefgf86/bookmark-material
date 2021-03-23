import { NgModule } from '@angular/core';
import { MenuAdminComponent } from './menu-admin.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuAdminComponent,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../../pages/tab1/tab1.module').then((m) => m.Tab1Module),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../../pages/tab2/tab2.module').then((m) => m.Tab2Module),
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  declarations: [],
  // imports: [
  //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  // ],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MenuAdminRoutingModule { }

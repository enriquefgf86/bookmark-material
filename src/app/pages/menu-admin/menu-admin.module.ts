import { MenuAdminRoutingModule } from '../menu-admin/menu-admin-routing.module';
import { MenuAdminComponent } from '../menu-admin/menu-admin.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Tab2Module } from '../tab2/tab2.module';
import { Tab1Module } from '../tab1/tab1.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuAdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Tab2Module,
    Tab1Module,
    MenuAdminRoutingModule,

    MatToolbarModule,
    MatIconModule,
  ],
  exports: [MenuAdminComponent],
})
export class MenuAdminModule {}

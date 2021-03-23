import { Tab1RoutingModule } from '../tab1/tab1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';

@NgModule({
  declarations: [Tab1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Tab1RoutingModule
  ],
  exports:[Tab1Component]
})
export class Tab1Module {}

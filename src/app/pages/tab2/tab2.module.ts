import { Tab2Component } from '../tab2/tab2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Tab2RoutingModule } from './tab2-routing.module';

@NgModule({
  declarations: [Tab2Component],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, Tab2RoutingModule],
  exports: [Tab2Component],
})
export class Tab2Module {}

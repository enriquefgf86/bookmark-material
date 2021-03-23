import { ListBookmarksComponent } from './list-bookmarks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ListBookmarksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ListBookmarksModule {}

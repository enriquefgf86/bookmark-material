import { ListElementBookmarkComponent } from './list-element-bookmark.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ListElementBookmarkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ListElementBookmarkModule {}

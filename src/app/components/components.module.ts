import { ListElementBookmarkModule } from './list-element-bookmark/list-element-bookmark.module';
import { CreateBookmarkTriggererModule } from './create-bookmark-triggerer/create-bookmark-triggerer.module';
import { ListBookmarksModule } from './list-bookmarks/list-bookmarks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ListBookmarksModule,
    CreateBookmarkTriggererModule,
    ListElementBookmarkModule,
  ],
})
export class ComponentsModule {}

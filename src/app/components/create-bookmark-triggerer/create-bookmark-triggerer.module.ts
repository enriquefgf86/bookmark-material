import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookmarkTriggererComponent } from './create-bookmark-triggerer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreateBookmarkTriggererComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CreateBookmarkTriggererModule {}

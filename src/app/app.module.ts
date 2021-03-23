import { MenuAdminModule } from './pages/menu-admin/menu-admin.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { globalReducer } from './globalReducer.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import { Tab1Module } from './pages/tab1/tab1.module';
import { Tab2Module } from './pages/tab2/tab2.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    ComponentsModule,
    MenuAdminModule,
    Tab1Module,
    Tab2Module

    // StoreModule.forRoot(globalReducer, {
    //   runtimeChecks: {
    //     strictStateImmutability: false,
    //     strictActionImmutability: false,
    //   },
    // }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }),
  ],
  // providers: [{ provide: RouteReuseStrategy }],

  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatLegacyButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

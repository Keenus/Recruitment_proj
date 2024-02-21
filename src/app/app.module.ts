import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from '@angular/forms';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { AchievementsSectionComponent } from './components/achievements-section/achievements-section.component';
import { TransformationsSectionComponent } from './components/transformations-section/transformations-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarMenuComponent,
    ImagesSliderComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterBarComponent,
    AchievementsSectionComponent,
    TransformationsSectionComponent,
    GallerySectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

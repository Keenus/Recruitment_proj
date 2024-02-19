import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AboutSectionComponent} from "./components/about-section/about-section.component";

const routes: Routes = [
  {
    path:  '',
    component: MainPageComponent
  },
  {
    path: 'achievements',
    component: MainPageComponent
  },
  {
    path: 'transformations',
    component: MainPageComponent
  },
  {
    path: 'gallery',
    component: MainPageComponent
  },
  {
    path: 'about',
    component: AboutSectionComponent
  },
  {
    path: 'book-training',
    component: MainPageComponent
  },
  {
    path: 'contact',
    component: MainPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

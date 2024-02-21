import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AboutSectionComponent} from "./components/about-section/about-section.component";
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";
import {AchievementsSectionComponent} from "./components/achievements-section/achievements-section.component";
import {TransformationsSectionComponent} from "./components/transformations-section/transformations-section.component";
import {GallerySectionComponent} from "./components/gallery-section/gallery-section.component";
import {
  ArrangeTrainingSectionComponent
} from "./components/arrange-training-section/arrange-training-section.component";

const routes: Routes = [
  {
    path:  '',
    component: MainPageComponent
  },
  {
    path: 'achievements',
    component: AchievementsSectionComponent
  },
  {
    path: 'transformations',
    component: TransformationsSectionComponent
  },
  {
    path: 'gallery',
    component: GallerySectionComponent
  },
  {
    path: 'about',
    component: AboutSectionComponent
  },
  {
    path: 'book-training',
    component: ArrangeTrainingSectionComponent,
  },
  {
    path: 'contact',
    component: ContactSectionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

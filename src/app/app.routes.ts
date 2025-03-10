import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BiographyComponent} from './biography/biography.component';
import {AboutUsComponent} from './about-us/about-us.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "biography",
    component: BiographyComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  }
];

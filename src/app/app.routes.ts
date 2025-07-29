import { Routes } from '@angular/router';
import { properties_route } from './features/properties/properties.route';
export const routes: Routes = [
  {
    path: "",
    redirectTo: 'properties',
    pathMatch: 'full',
  },
  {
    path: 'properties',
    children: properties_route
  }

];

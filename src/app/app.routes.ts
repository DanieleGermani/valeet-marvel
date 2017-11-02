import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});

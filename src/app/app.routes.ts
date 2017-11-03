import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent,PortfolioItemComponent,AboutComponent} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: PortfolioItemComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});

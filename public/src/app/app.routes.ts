import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent,PortfolioItemComponent,AboutComponent,SearchComponent,UserComponent,ComicComponent} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: 'comic', component: ComicComponent },
  { path: 'item/:id', component: PortfolioItemComponent },
  { path: 'search/:termino', component: SearchComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});

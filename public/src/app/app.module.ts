import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


//Routes
import {app_routing} from './app.routes';
//services
import{InfoService} from './services/info-service.service';
import{MarvelService} from './services/marvel.service.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    FooterComponent,
    PortfolioItemComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     app_routing

  ],
  providers: [InfoService,MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

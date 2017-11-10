import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


//Routes
import { app_routing } from './app.routes';
//Services
import { InfoService } from './services/info-service.service';
import { MarvelService } from './services/marvel.service.service';
import { UserService } from './services/user.service';
import { ComicService } from './services/comic.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/new-user/new-user.component';
import { ComicComponent } from './components/comic/comic.component';
import { NewComicComponent } from './components/comic/new-comic/new-comic.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    FooterComponent,
    PortfolioItemComponent,
    AboutComponent,
    SearchComponent,
    UserComponent,
    UserNewComponent,
    ComicComponent,
    NewComicComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    FormsModule

  ],
  providers: [InfoService, MarvelService, UserService, ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

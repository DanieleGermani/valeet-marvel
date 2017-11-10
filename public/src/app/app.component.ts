import { Component } from '@angular/core';
import{InfoService} from './services/info-service.service';
import{MarvelService} from './services/marvel.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoService:InfoService,
              public _marvelService:MarvelService){

              }
}

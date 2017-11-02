import { Component } from '@angular/core';
import{MarvelService} from '../../services/marvel.service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'

})
export class PortfolioComponent {

  constructor(public _marvelService:MarvelService) { }



}

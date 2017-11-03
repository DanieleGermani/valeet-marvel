import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../services/marvel.service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  termino: any = undefined;

  constructor(public route: ActivatedRoute,
    public _marvelService: MarvelService) {

    route.params.subscribe(params => {

      this.termino = params['termino'];

      _marvelService.searchComics(this.termino)

    })


  }
}

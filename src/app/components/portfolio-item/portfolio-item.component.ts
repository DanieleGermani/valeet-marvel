import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'

})
export class PortfolioItemComponent {
  comic: any = undefined;
  id: any = undefined;

  constructor(public route: ActivatedRoute,
    public _marvelService: MarvelService) {

      route.params.subscribe(params=>{

          _marvelService.loadingItemByID(params['id'])
            .subscribe(res=>{
              this.id = params['id'];
              this.comic= res.json().data.results[0];
               console.log(this.comic.series.name)


            })
      })
    }

  }

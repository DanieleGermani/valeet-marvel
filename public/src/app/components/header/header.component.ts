import { Component } from '@angular/core';
import { InfoService } from '../../services/info-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {

  constructor(public _infoS: InfoService,
    public router: Router) { }

  searchComic(termino: string) {
    console.log(termino)
    this.router.navigate(['/search', termino]);
  }




}

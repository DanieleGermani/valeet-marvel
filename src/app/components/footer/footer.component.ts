import { Component } from '@angular/core';
import {InfoService} from '../../services/info-service.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'

})
export class FooterComponent {
  year:number = new Date().getFullYear();

  constructor(public _infoS:InfoService) { }



}

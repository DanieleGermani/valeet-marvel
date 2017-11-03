import { Component } from '@angular/core';
import { InfoService} from '../../services/info-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'

})
export class AboutComponent  {

  constructor(public _infoS:InfoService) { }



}

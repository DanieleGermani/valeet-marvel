import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ComicService} from '../../../services/comic.service';
import {Comic} from '../comic';
// import {TextObjects} from '../comic';


@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.css']
})
export class NewComicComponent implements OnInit {
  @Output() createNewComicEvent = new EventEmitter();
   newComic = new Comic;
  //  newTextObjects = new TextObjects;

  constructor() { }

  ngOnInit() {

  }
  create() {
     this.createNewComicEvent.emit(this.newComic);
     console.log(this.newComic);
     this.newComic = new Comic();

    }

}

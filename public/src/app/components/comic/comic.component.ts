import { Component, OnInit } from '@angular/core';
import {ComicService} from '../../services/comic.service';
import {Comic} from './comic';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics: Comic[] = [];

  constructor(private _comicService: ComicService) { }

  ngOnInit() {
     this.getComics();
  }
  getComics() {
     this._comicService.getComics()
      .then(comics => this.comics = comics)
      .catch(err => console.log(err));
  }

  create(comic: Comic){
    this._comicService.create(comic)
      .then(status => this.getComics())
      .catch(err => console.log(err));
  }

}

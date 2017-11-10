import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Comic} from '../components/comic/comic';



import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ComicService {

  constructor(private _http:Http) { }

  create(comic: Comic,){
    return this._http.post('/comics', comic)
      .map(data => data.json()).toPromise()

  }
  getComics() {
    return this._http.get('/comics')
    .map(data => data.json()).toPromise()
  }

  getComic(comic: Comic) {
    return this._http.get('/comics/' + comic._id)
    .map(data => data.json()).toPromise()
  }


}

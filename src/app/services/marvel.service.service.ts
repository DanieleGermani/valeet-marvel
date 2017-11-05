import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class MarvelService {
  key: any = "0b42f200217c6f2799d73efdad72146b";
  MD5: any = "c9fdab8e53926323e0b2a0d9e2606054";
  sortByTitle: any = [];
  characters: any[] = [];
  characters_filter: any[] = [];
  loading: boolean = true;

  constructor(public http: Http) {
    this.loadingComics()

  }

  public searchComics(termino: string) {

    if (this.characters.length === 0) {
      this.loadingComics()
        .then(() => {
          this.filterComics(termino);
        });
    } else {
      this.filterComics(termino);
    }
  }


  public filterComics(termino: string) {
    this.characters_filter = [];
    termino.toLowerCase();

    this.characters.forEach(comic => {
      if (comic.title.toLowerCase().indexOf(termino) >= 0) {
        this.characters_filter.push(comic)
      }
      //console.log(this.characters_filter)
    })
  }


  public loadingComics() {
    this.loading = true;
    let promise = new Promise((resolve, reject) => {
      this.http.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.key}&hash=${this.MD5}`)
        .subscribe(res => {
          this.characters = res.json().data.results
          this.loading = false;

          function compare(a, b) {
            if (a.title < b.title)
              return -1;
            if (a.title > b.title)
              return 1;
            return 0;
          }
          this.sortByTitle = this.characters.sort(compare)
        });
      resolve();
    });

    return promise;

  }


  public loadingItemByID(id: string) {
    return this.http.get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${this.key}&hash=${this.MD5}`)
  }

}

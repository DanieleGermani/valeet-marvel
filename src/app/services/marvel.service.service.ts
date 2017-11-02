import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class MarvelService {
  characters: any[] = [];
  characters_filter: any[] = [];
  loading: boolean = true;

  constructor(public http:Http) {
    this.loadingComics()

  }

    public loadingComics() {
        this.loading = true;
        let promise = new Promise((resolve, reject) => {
          this.http.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0b42f200217c6f2799d73efdad72146b&hash=c9fdab8e53926323e0b2a0d9e2606054')
            .subscribe(res => {
              this.characters = res.json().data.results
              this.loading = false;
              resolve();
              console.log(this.characters)

            });
        });
        return promise;
      }

}

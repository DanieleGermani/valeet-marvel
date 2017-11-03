import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class MarvelService {
  key:any = "0b42f200217c6f2799d73efdad72146b";
  MD5:any ="c9fdab8e53926323e0b2a0d9e2606054"
  characters: any[] = [];
  titles: any[]=[];
  characters_filter: any[] = [];
  loading: boolean = true;

  constructor(public http:Http) {
    this.loadingComics()

  }

    public loadingComics() {
        this.loading = true;
        let promise = new Promise((resolve, reject) => {
          this.http.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.key}&hash=${this.MD5}`)
            .subscribe(res => {
              this.characters = res.json().data.results
              this.loading = false;
              resolve();
              res.json().data.results.forEach((item)=>{
                this.titles.push(item.title)
              });
              console.log(this.titles.sort())

            });
        });
        return promise;
      }
      public loadingItemByID(id: string) {
        return this.http.get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${this.key}&hash=${this.MD5}`)
      }

}

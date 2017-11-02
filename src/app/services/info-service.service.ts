import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {
  info:any = {};
  loading:boolean = false;
  loadingAbout:boolean = false;
  infoAbout:any[] =[];

  constructor(public http:Http) {
    this.lodindigInfo();
    

}
public lodindigInfo(){
  this.http.get("assets/data/info-pages.json")
            .subscribe( data =>{
              this.loading = true;
              this.info = data.json();
            })

}


}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class DataService {

  constructor(private http: Http) { }


fetchData(){
 return this.http.get('https://api.themoviedb.org/3/movie/551?api_key=734fb3b201554a75cf7f7aab0727931c').map(
(res) => res.json()
 );
}
}

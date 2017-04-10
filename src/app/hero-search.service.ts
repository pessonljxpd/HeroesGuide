/**
 * Created by Shelly on 2017-4-10.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Hero} from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {
  }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`app/heroes/?name=${term}`).map(reponse => reponse.json().data as Hero[]);
  }
}

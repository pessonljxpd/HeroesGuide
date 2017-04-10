/**
 * Created by Shelly on 2017-4-10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {Hero} from './hero';
import {HeroSearchService} from './hero-search.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-search',
  templateUrl: `hero-search.component.html`,
  styleUrls: [`hero-search.component.css`],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  // Push a searchHeroes term into the observable stream.
  searchHeroes(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(hero: Hero): void {
    let link = ['./detail', hero.id];
    this.router.navigate(link);
  }
}

/**
 * Created by Shelly on 2017-4-9.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-hero-detail',
  templateUrl: `./hero-detail.component.html`
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }

  goback(): void {
    // this.location.back();
  }
}

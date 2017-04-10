/**
 * Created by Shelly on 2017-4-9.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: `heroes.component.html`,
  styleUrls: [`heroes.component.css`]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  addHero(heroName: string): void {
    this.heroService.create(heroName).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  deleteHero(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['./detail', this.selectedHero.id]);
  }
}

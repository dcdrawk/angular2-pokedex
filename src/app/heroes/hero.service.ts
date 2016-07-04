import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';

@Injectable()
export class HeroService {
  getHeroes() {
    // return HEROES;
    // return Promise.resolve(HEROES);
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 100) // 100 miliseconds
    );
  }

  getHero(id) {
    return this.getHeroes()
    .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
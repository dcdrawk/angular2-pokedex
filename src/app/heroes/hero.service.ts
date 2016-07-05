import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';

@Injectable()
export class HeroService {
  getHeroes() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 0) // 0 milliseconds
    );
  }

  getHero(id) {
    return this.getHeroes()
    .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../heroes/hero';
import { HeroDetailsComponent } from '../hero-details/hero-details.component'
import { HeroService } from '../heroes/hero.service';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailsComponent]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
    // console.log(moment().format());
  }
  
  getHeroes() {
    // this.heroes = this.heroService.getHeroes();    
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
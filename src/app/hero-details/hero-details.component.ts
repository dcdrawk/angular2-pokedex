import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-details',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  sub: any;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

  @Input()
  hero: Hero;
}

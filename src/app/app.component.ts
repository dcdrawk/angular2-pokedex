import { Component }       from '@angular/core';
import { HeroService }     from './heroes/hero.service';
import { PokemonService }     from './pokemon/pokemon.service';
import { PokemonDetailsService } from './pokemon-details/pokemon-details.service'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
    PokemonService,
    PokemonDetailsService
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  menu = [
    {
      title: 'Heroes',
      path: `/heroes`
    },
    {
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      title: 'Pokemon',
      path: '/pokemon'
    }
  ];
}
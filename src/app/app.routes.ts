import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: RouterConfig = [  
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
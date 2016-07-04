import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/';
import { HeroDetailsComponent } from './hero-details/';
import { PokemonComponent } from './pokemon/';
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
    path: '',
    redirectTo: '/dashboard',
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
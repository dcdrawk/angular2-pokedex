import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonDetailsService } from '../pokemon-details/pokemon-details.service';
import { LoadingSpinnerComponent } from '../core/loading-spinner/loading-spinner.component';
import { CapitalizePipe } from "../capitalize.pipe";

@Component({
  moduleId: module.id,
  selector: 'app-pokemon-details',
  templateUrl: 'pokemon-details.component.html',
  styleUrls: ['pokemon-details.component.css'],
  directives: [LoadingSpinnerComponent],
  pipes: [CapitalizePipe]
})

export class PokemonDetailsComponent implements OnInit {
  sub: any;
  pokemon: any;

  constructor(
    private pokemonDetailsService: PokemonDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {    

    //Get the details of the pokemon by its ID
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.pokemonDetailsService.getPokemonDetails(id).subscribe(details => {
        this.pokemon = this.formatPokemon(details);
      });
    });


  }

  formatPokemon(pokemon: any) {
    switch(true) {
      case (pokemon.id < 10):
        pokemon.number = `00${pokemon.id}`
        break;
      case (pokemon.id < 100):
        pokemon.number = `0${pokemon.id}`;
        break;
      default:
        pokemon.number = `${pokemon.id}`;
        break;
      }
      pokemon.stats.reverse();

      pokemon.stats.forEach( stat => {
        stat.width = this.getStatWidth(stat.base_stat);
      });
      console.log(pokemon);
      return pokemon;
  }

  getStatWidth(stat: number ) {
    return String((stat / 230) * 100) + '%';
  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonDetailsService } from '../pokemon-details/pokemon-details.service';

@Component({
  moduleId: module.id,
  selector: 'app-pokemon-details',
  templateUrl: 'pokemon-details.component.html',
  styleUrls: ['pokemon-details.component.css']
})

export class PokemonDetailsComponent implements OnInit {
  sub: any;
  pokemonDetails: any;

  constructor(
    private pokemonDetailsService: PokemonDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    

    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.pokemonDetailsService.getPokemonDetails(id).subscribe(details => {
        this.pokemonDetails = details;
        // this.pokemonList.result = 'test';
      });
    })
  }

}

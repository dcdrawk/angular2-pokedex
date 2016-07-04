import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  moduleId: module.id,
  selector: 'app-pokemon',
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList: any[];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(Pokemon => {
      console.log(Pokemon);
    });
  }

}
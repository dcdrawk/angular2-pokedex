import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-pokemon',
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})

export class PokemonComponent implements OnInit {
pokemonList: Object;

  // pokemonList: {
  //   result: any[];
  // };
  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(list => {
      this.pokemonList = this.formatList(list);
      // this.pokemonList.result = 'test';
    });
  }

  nextPage(url) {
    this.pokemonService.getPokemonList(url).subscribe(Pokemon => {
      this.pokemonList = Pokemon;
    });
  }

  formatList(list: any) {
    let array = list.results;
    array.forEach((item, index) => {
      item.id = +index + 1;

      switch(true) {
        case (index < 10):
          item.number = `00${index+1}`
          break;
        case (index < 100):
          item.number = `0${index+1}`;
          break;
        default:
          item.number = `${index+1}`;
          break;
      }        
    });
    console.log(list);
    return list;
  }

  gotoDetail(pokemon: any) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}

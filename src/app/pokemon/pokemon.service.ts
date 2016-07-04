import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Pokemon } from './pokemon';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';
// import { Hero } from './hero';

@Injectable()
export class PokemonService {
   private pokeUrl = 'http://pokeapi.co/api/v2/';  // URL to web api

   constructor(private http: Http) { }

   getPokemonList (): Observable<Pokemon[]> {
     console.log('pokemon list!');
     return this.http.get(this.pokeUrl + 'pokemon')
                  .map(this.extractData)
                  // .catch(this.handleError);
              //  .toPromise()
              //  .then(response => response.json().data)
              //  .catch(this.handleError);
   }

   private extractData(res: Response) {
     console.log('response');
    let body = res.json();
     console.log(body);
    return body || { };
  }

   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
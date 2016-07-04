import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Pokemon } from './pokemon';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import { Observable }     from 'rxjs/Observable';
// import { Hero } from './hero';

@Injectable()
export class PokemonService {
   private pokeUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=721&offset=0';  // URL to web api
    // pokemonList: any[];
    _data:Observable<any> = null;

   constructor(private http: Http) { }

   getPokemonList (apiPath?: string): Observable<Pokemon[]> {
       let url = this.pokeUrl;

       if(apiPath) {
           this.clearCache();
           url = apiPath;
       }

        if(!this._data){
             this._data = this.http.get(url)
                                    .map(this.extractData)
                                    .publishReplay(1)
                                    .refCount();
        }
        return this._data;
   }

    clearCache() {
        this._data = null;
    }

   private extractData(res: Response) {
       console.log('extracting data...');
     let body = res.json();
     return body || { };
  }

   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import { Pokemon } from '../pokemon/pokemon';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PokemonDetailsService {

    _data:Observable<any> = null;

   constructor(private http: Http) { }

   getPokemonDetails (id?: string): Observable<any[]> {
     let url = 'http://pokeapi.co/api/v2/pokemon/' + id;
    this._data = this.http.get(url)
                          .map(this.extractData)
                          .publishReplay(1)
                          .refCount();
    return this._data;

   }

    clearCache() {
        this._data = null;
    }

   private extractData(res: Response) {
     let body = res.json();
     return body || { };
  }

   private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
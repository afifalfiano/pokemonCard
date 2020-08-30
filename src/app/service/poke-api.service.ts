import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  urlPokemonApi = 'https://pokeapi.co/api/v2';
  urlImagePokemon = 'https://pokeres.bastionbot.org/images/pokemon';
  constructor(
    private httpSvc: HttpClient
  ) { }

  getDataPoke(): Observable<any> {
    return this.httpSvc.get<any>(this.urlPokemonApi + '/pokemon?limit=1000');
  }

  getEachPokemon(data: any): Observable<any> {
    return this.httpSvc.get<any>(data);
  }

}

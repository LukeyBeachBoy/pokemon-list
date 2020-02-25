import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../definitions/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonList: BehaviorSubject<Pokemon[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) {}

  getPokemon() {
    return this.pokemonList;
  }

  async fetchPokemon() {
    const result = await this.http
      .get('https://pokeapi.co/api/v2/pokemon/')
      .toPromise();
    const results = (result as any).results;
    results.forEach(async pokemon => {
      const pokeStats: any = await this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .toPromise();
      const newPokemon: Pokemon = {
        name: pokemon.name,
        image: pokeStats.sprites.front_default,
        height: pokeStats.height,
        abilities: pokeStats.abilities,
        id: pokeStats.id,
        moves: pokeStats.moves,
        type: pokeStats.types[0],
        weight: pokeStats.weight
      };
      this.pokemonList.next([...this.pokemonList.value, newPokemon]);
    });
    console.log(this.pokemonList);
  }
}

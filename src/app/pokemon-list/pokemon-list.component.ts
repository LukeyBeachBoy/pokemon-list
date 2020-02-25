import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../definitions/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  searchedList: Pokemon[];
  pokemonList: Pokemon[];
  searchInput = '';
  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.pokeService.getPokemon().subscribe(list => {
      this.pokemonList = list;
    });
    this.pokeService.fetchPokemon();
  }

  onClick($event) {}

  onChange() {
    this.searchedList = this.pokemonList.filter(pokemon => {
      return pokemon.name.includes(this.searchInput);
    });
  }
}

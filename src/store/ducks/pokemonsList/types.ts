/**
 * Action types
 */

export enum PokemonsListTypes {
  GET_POKEMONS_LIST_REQUEST = '@pokemonsList/GET_POKEMONS_LIST_REQUEST',
  GET_POKEMONS_LIST_SUCCESS = '@pokemonsList/GET_POKEMONS_LIST_SUCCESS',
  GET_POKEMONS_LIST_FAILURE = '@pokemonsList/GET_POKEMONS_LISTFAILURET',
}

/**
 * Data types
 */

export interface PokemonListPokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListPokemon[];
}

/**
 * State types
 */

export interface PokemonListState {
  readonly data: PokemonList | null;
  readonly loading: boolean;
  readonly error: boolean;
}

import { action } from 'typesafe-actions';
import { PokemonsListTypes, PokemonList } from './types';

export const getPokemonsListRequest = () =>
  action(PokemonsListTypes.GET_POKEMONS_LIST_REQUEST);

export const getPokemonsListSuccess = (data: PokemonList) =>
  action(PokemonsListTypes.GET_POKEMONS_LIST_SUCCESS, data);

export const getPokemonsListFailure = () =>
  action(PokemonsListTypes.GET_POKEMONS_LIST_FAILURE);

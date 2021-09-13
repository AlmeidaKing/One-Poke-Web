import { action } from 'typesafe-actions';

import { PokemonDetailsTypes as types, PokemonDetails } from './types';

export const getPokemonDetailsRequest = (name: string) =>
  action(types.GET_POKEMON_DETAILS_REQUEST, { name });

export const getPokemonDetailsSuccess = (data: PokemonDetails) =>
  action(types.GET_POKEMON_DETAILS_SUCCESS, data);

export const getPokemonDetailsFailure = () =>
  action(types.GET_POKEMON_DETAILS_FAILURE);

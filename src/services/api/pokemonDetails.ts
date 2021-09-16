import { AxiosPromise } from 'axios';
import {
  PokemonDetailsEntityPayload,
  PokemonDetails,
} from 'store/ducks/pokemonDetails/types';
import api from './api-base';

const pokemonsDetailsApi = {
  getPokemonsDetails: (
    data: PokemonDetailsEntityPayload,
  ): AxiosPromise<PokemonDetails> => api.get(`/pokemon/${data.name}`),
};

export default pokemonsDetailsApi;
export { pokemonsDetailsApi };

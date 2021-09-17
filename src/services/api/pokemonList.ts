import { AxiosPromise } from 'axios';
import { PokemonList } from 'store/ducks/pokemonsList/types';
import api from './api-base';

const randomPokemonListOffset = Math.random() * 10;

const pokemonsListApi = {
  getPokemonsList: (): AxiosPromise<PokemonList> =>
    api.get('/pokemon', {
      params: {
        offset: randomPokemonListOffset.toFixed(0),
        limit: 1,
      },
    }),
};

export default pokemonsListApi;
export { pokemonsListApi };

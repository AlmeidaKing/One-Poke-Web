import { PokemonDetailsEntityPayload } from 'store/ducks/pokemonDetails/types';
import api from './api-base';

const pokemonsDetailsApi = {
  getPokemonsDetails: (data: PokemonDetailsEntityPayload) =>
    api.get(`/pokemon/${data.name}`),
};

export default pokemonsDetailsApi;
export { pokemonsDetailsApi };

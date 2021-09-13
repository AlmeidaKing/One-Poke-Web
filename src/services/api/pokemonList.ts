import api from './api-base';

const randomPokemonListOffset = Math.random() * 10;

const pokemonsListApi = {
  getPokemonsList: () =>
    api.get('/pokemon', {
      params: {
        offset: randomPokemonListOffset.toFixed(0),
        limit: 1,
      },
    }),
};

export default pokemonsListApi;
export { pokemonsListApi };

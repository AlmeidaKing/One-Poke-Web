import { Reducer } from 'redux';
import { PokemonListState, PokemonsListTypes } from './types';
import { sagas } from 'store/ducks/pokemonsList/sagas';

const INITIAL_STATE: PokemonListState = {
  data: null,
  loading: false,
  error: false,
};

const reducer: Reducer<PokemonListState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsListTypes.GET_POKEMONS_LIST_REQUEST:
      return { ...state, loading: true };
    case PokemonsListTypes.GET_POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case PokemonsListTypes.GET_POKEMONS_LIST_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
export { sagas };

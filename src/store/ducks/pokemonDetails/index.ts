import { Reducer } from 'redux';
import { PokemonDetailsState, PokemonDetailsTypes } from './types';
import { sagas } from './sagas';

const INITIAL_STATE = {
  pokemonDetails: null,
  loading: false,
  error: false,
};

const reducer: Reducer<PokemonDetailsState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case PokemonDetailsTypes.GET_POKEMON_DETAILS_REQUEST:
      return { ...state, loading: true, error: false };

    case PokemonDetailsTypes.GET_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pokemonDetails: action.payload,
      };

    case PokemonDetailsTypes.GET_POKEMON_DETAILS_FAILURE:
      return { ...state, loading: false, error: true, data: null };

    default:
      return state;
  }
};

export default reducer;
export { sagas };

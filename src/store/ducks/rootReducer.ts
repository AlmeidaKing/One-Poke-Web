import { combineReducers } from 'redux';

import pokemonsList from './pokemonsList';
import pokemonDetails from './pokemonDetails';

export default combineReducers({
  pokemonsListData: pokemonsList,
  pokemonDetailsData: pokemonDetails,
});

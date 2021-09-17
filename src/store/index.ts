import { createStore, Store, applyMiddleware } from 'redux';
import { PokemonListState } from './ducks/pokemonsList/types';
import { PokemonDetailsState } from './ducks/pokemonDetails/types';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  pokemonsListData: PokemonListState;
  pokemonDetailsData: PokemonDetailsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;

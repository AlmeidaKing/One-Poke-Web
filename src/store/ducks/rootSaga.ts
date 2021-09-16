import { fork, all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { sagas as PokemonListSagas } from './pokemonsList';
import { sagas as PokemonDetailsSaga } from './pokemonDetails';

const allSagas = [...PokemonListSagas, ...PokemonDetailsSaga];

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all(allSagas.map((saga) => fork(saga)));
}

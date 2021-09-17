import { call, put, takeEvery } from 'redux-saga/effects';
import pokemonsDetailsApi from 'services/api/pokemonDetails';

// types:
import { AxiosResponse } from 'axios';
import {
  PokemonDetailsEntityPayload,
  PokemonDetails,
  PokemonDetailsTypes as types,
} from './types';

// actions:
import { getPokemonDetailsSuccess, getPokemonDetailsFailure } from './actions';

type ISagaPayload<T> = {
  type: string;
  payload?: T;
  params?: T;
};

export function* getPokemonDetails({
  payload,
}: ISagaPayload<PokemonDetailsEntityPayload>) {
  try {
    const params = {
      name: payload?.name || '',
    };

    const response: AxiosResponse<PokemonDetails> = yield call(
      pokemonsDetailsApi.getPokemonsDetails,
      params,
    );

    if (response.status === 200)
      yield put(getPokemonDetailsSuccess(response.data));
  } catch (err) {
    yield put(getPokemonDetailsFailure());
  }
}

export function* watchPokemonDetails() {
  yield takeEvery(types.GET_POKEMON_DETAILS_REQUEST, getPokemonDetails);
}

export const sagas = [watchPokemonDetails];

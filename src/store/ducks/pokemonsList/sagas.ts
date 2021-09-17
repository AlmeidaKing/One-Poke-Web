import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import pokemonsListApi from 'services/api/pokemonList';

// actions:
import {
  getPokemonsListSuccess,
  getPokemonsListFailure,
} from 'store/ducks/pokemonsList/actions';

// types:
import {
  PokemonList,
  PokemonsListTypes as types,
} from 'store/ducks/pokemonsList/types';

export function* getPokemonList() {
  try {
    const response: AxiosResponse<PokemonList> = yield call(
      pokemonsListApi.getPokemonsList,
    );

    if (response.status === 200)
      yield put(getPokemonsListSuccess(response.data));
  } catch (err) {
    yield put(getPokemonsListFailure());
  }
}

export function* watchPokemonList() {
  yield takeEvery(types.GET_POKEMONS_LIST_REQUEST, getPokemonList);
}

export const sagas = [watchPokemonList];

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// types:
import { ApplicationState } from 'store';

// actions:
import * as POKEMONS_LIST_ACTIONS from 'store/ducks/pokemonsList/actions';
import * as POKEMON_DETAILS_ACTIONS from 'store/ducks/pokemonDetails/actions';

// styles:
import Wrapper from './Login.styles';

// containers
import { Form } from './containers/Form';

const Login: React.FC = () => {
  const {
    pokemonsListData,
    pokemonDetailsData: { pokemonDetails },
  } = useSelector((state: ApplicationState) => state);

  const dispatch = useDispatch();

  // Fetch pokemons list
  useEffect(() => {
    dispatch(POKEMONS_LIST_ACTIONS.getPokemonsListRequest());
  }, []);

  // Wait fetch pokemons list, so fetch pokemon details
  useEffect(() => {
    if (pokemonsListData?.data)
      dispatch(
        POKEMON_DETAILS_ACTIONS.getPokemonDetailsRequest(
          pokemonsListData.data.results[0].name,
        ),
      );
  }, [pokemonsListData]);

  console.log(pokemonDetails);

  return (
    <Wrapper>
      <div className="container">
        {pokemonDetails?.sprites && (
          <img
            className="pokemon-image"
            src={
              pokemonDetails?.sprites?.other?.['official-artwork']
                ?.front_default || ''
            }
          />
        )}
        <Form />
      </div>
    </Wrapper>
  );
};

export default Login;

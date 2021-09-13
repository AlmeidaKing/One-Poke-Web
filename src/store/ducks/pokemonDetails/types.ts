/**
 * Action types
 */

export enum PokemonDetailsTypes {
  GET_POKEMON_DETAILS_REQUEST = '@pokemon/GET_POKEMON_DETAILS_REQUEST',
  GET_POKEMON_DETAILS_SUCCESS = '@pokemon/GET_POKEMON_DETAILS_SUCCESS',
  GET_POKEMON_DETAILS_FAILURE = '@pokemon/GET_POKEMON_DETAILS_FAILURE',
}

/**
 * Data types
 */

export interface StatDetail {
  name: string;
  url: string;
}

export interface StatsData {
  base_stat: number;
  effort: number;
  stat: StatDetail[];
}

export interface Sprite {
  front_default: string | null;
  front_female: string | null;
}

export interface SpriteOther {
  dream_world: Sprite;
  'official-artwork': Sprite;
}

export interface Sprites {
  other: SpriteOther;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  stats: StatsData[];
  sprites: Sprites;
}

export interface PokemonDetailsEntityPayload {
  name: string;
}

/**
 * State types
 */

export interface PokemonDetailsState {
  readonly pokemonDetails: PokemonDetails | null;
  readonly loading: boolean;
  readonly error: boolean;
}

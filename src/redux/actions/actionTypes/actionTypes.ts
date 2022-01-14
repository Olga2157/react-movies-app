import { MovieInfoDetails, MovieResults } from "../../../types";

export interface GetMovies {
  type: ActionTypes.GET_MOVIES,
  offset: number
}

export interface GotMovies {
  type: ActionTypes.GOT_MOVIES,
  movies: MovieResults
}

export type MovieActions = GetMovies | GotMovies

export enum ActionTypes {
  GET_MOVIES = 'GET_MOVIES',
  GOT_MOVIES = 'GOT_MOVIES',
}

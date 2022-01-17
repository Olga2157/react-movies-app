import { Genres } from '../../../model/enums/Genres';
import { MovieResults } from '../../../types';

export interface GotMovies {
    type: ActionTypes.GOT_MOVIES,
    movies: MovieResults,
    totalAmount: number,
    chosenGenre: Genres
}

export interface UpdateCurrentPageWithMovies {
    type: ActionTypes.UPDATE_CURRENT_PAGE_WITH_MOVIES,
    page: number,
    movies: MovieResults,
    totalAmount: number
}

export type MovieActions = GotMovies | UpdateCurrentPageWithMovies

export enum ActionTypes {
    GET_MOVIES = 'GET_MOVIES',
    GOT_MOVIES = 'GOT_MOVIES',
    UPDATE_CURRENT_PAGE_WITH_MOVIES = 'UPDATE_CURRENT_PAGE_WITH_MOVIES',
}

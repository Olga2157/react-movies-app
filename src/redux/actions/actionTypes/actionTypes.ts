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

export interface UpdateCongratsModalStatus {
    type: ActionTypes.UPDATE_CONGRATS_MODAL_STATUS,
}

export type MovieActions = GotMovies | UpdateCurrentPageWithMovies | UpdateCongratsModalStatus

export enum ActionTypes {
    GOT_MOVIES = 'GOT_MOVIES',
    UPDATE_CURRENT_PAGE_WITH_MOVIES = 'UPDATE_CURRENT_PAGE_WITH_MOVIES',
    UPDATE_CONGRATS_MODAL_STATUS = 'UPDATE_CONGRATS_MODAL_STATUS',
}

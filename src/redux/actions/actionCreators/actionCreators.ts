import { Dispatch } from 'react';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk'
import { ActionTypes, GotMovies, MovieActions, UpdateCurrentPageWithMovies } from '../actionTypes/actionTypes';
import ApiService from '../../../services/APIService'
import { FilterSearch, MovieInfoDetails } from '../../../types';
import { Genres } from '../../../model/enums/Genres';
import store from '../../../store';

async function updateMovies() {
  const currentPage = store.getState().movieReducer.currentPage;
  const chosenGenre = store.getState().movieReducer.chosenGenre;
  let filterSearch = {
    filter: chosenGenre ? chosenGenre : Genres.ALL
  };
  const movies = await ApiService.getMovies(currentPage - 1, 8, filterSearch);
  const totalAmount = movies.totalAmount;
  const gotMovieAction: MovieActions = {
    type: ActionTypes.GOT_MOVIES,
    movies,
    totalAmount,
    chosenGenre: filterSearch.filter ? filterSearch.filter : Genres.ALL
  };
  return gotMovieAction;
}

export const getMoviesCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<void>,
  // The type for the data within the last action
  MovieInfoDetails[],
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  GotMovies
>> = (offset?: number, limit?: number, filterSearch?: FilterSearch) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    const currentGenreFilter = store.getState().movieReducer.chosenGenre;
    let movies;
    if (!filterSearch) {
      filterSearch = {
        filter: currentGenreFilter ? currentGenreFilter : Genres.ALL
      };
      movies = await ApiService.getMovies(offset, limit, filterSearch);
    } else if (!filterSearch.filter && currentGenreFilter) {
      filterSearch.filter = currentGenreFilter;
      movies = await ApiService.getMovies(offset, limit, filterSearch);
    } else {
      movies = await ApiService.getMovies(offset, limit, filterSearch);
    }
    const totalAmount = movies.totalAmount;
    const gotMovieAction: MovieActions = {
      type: ActionTypes.GOT_MOVIES,
      movies,
      totalAmount,
      chosenGenre: filterSearch.filter ? filterSearch.filter : Genres.ALL
    };
    return dispatch(gotMovieAction);
  };
};

export const setCurrentPageCreator: ActionCreator<ThunkAction<
  Promise<void>,
  MovieInfoDetails[],
  null,
  UpdateCurrentPageWithMovies
>> = (page: number) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    const currentGenreFilter = store.getState().movieReducer.chosenGenre;
    let movies;
    let filterSearch = {
      filter: currentGenreFilter ? currentGenreFilter : Genres.ALL
    };
    movies = await ApiService.getMovies((page - 1) * 8, 8, filterSearch);
    const totalAmount = movies.totalAmount;
    const gotMovieAction: MovieActions = {
      type: ActionTypes.UPDATE_CURRENT_PAGE_WITH_MOVIES,
      movies,
      totalAmount,
      page
    };
    return dispatch(gotMovieAction);
  };
};

export const addMovieCreator: ActionCreator<ThunkAction<
  Promise<void>,
  MovieInfoDetails[],
  null,
  GotMovies
>> = (movie: MovieInfoDetails) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    await ApiService.createMovie(movie);
    const gotMovieAction = await updateMovies();
    return dispatch(gotMovieAction);
  };
};

export const updateMovieCreator: ActionCreator<ThunkAction<
  Promise<void>,
  MovieInfoDetails[],
  null,
  GotMovies
>> = (movie: MovieInfoDetails) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    await ApiService.updateMovie(movie);
    const gotMovieAction = await updateMovies();
    return dispatch(gotMovieAction);
  };
};

export const deleteMovieCreator: ActionCreator<ThunkAction<
  Promise<void>,
  MovieInfoDetails[],
  null,
  GotMovies
>> = (movieId: number) => {
  return async (dispatch: Dispatch<MovieActions>) => {
    await ApiService.deleteMovie(movieId);
    const gotMovieAction = await updateMovies();
    return dispatch(gotMovieAction);
  };

};

export const toggleCurrentGenresCreator = () => {
  const toggleModalStatus: MovieActions = {
    type: ActionTypes.UPDATE_CONGRATS_MODAL_STATUS,
  };
  return toggleModalStatus;
}
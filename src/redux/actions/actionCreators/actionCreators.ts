import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { ActionTypes, GotMovies, MovieActions, UpdateCurrentPage } from "../actionTypes/actionTypes";
import { ThunkAction } from 'redux-thunk'
import ApiService from '../../../services/APIService'
import { FilterSearch, MovieInfoDetails, MovieResults } from "../../../types";
import { Genres } from "../../../model/enums/Genres";
import store from "../../../store";

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
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<void>,
  // The type for the data within the last action
  MovieInfoDetails[],
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  UpdateCurrentPage
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

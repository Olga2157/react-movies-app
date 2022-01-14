import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { ActionTypes, GotMovies, MovieActions } from "../actionTypes/actionTypes";
import { ThunkAction } from 'redux-thunk'
import ApiService from '../../../services/APIService'
import { MovieInfoDetails } from "../../../types";

export const getMoviesCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<void>,
  // The type for the data within the last action
  MovieInfoDetails[],
  // The type of the parameter for the nested function
  null,
  // The type of the last action to be dispatched
  GotMovies
>> = () => {
  return async (dispatch: Dispatch<MovieActions>) => {
    const movies = await ApiService.getMovies();
    const gotMovieAction: MovieActions = {
      type: ActionTypes.GOT_MOVIES,
      movies
    };
    return dispatch(gotMovieAction);
  };
};

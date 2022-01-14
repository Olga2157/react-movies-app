import { InitialStateMovie, MovieResults } from "../../types"
import { ActionTypes, MovieActions } from "../actions/actionTypes/actionTypes";
import camelcaseKeys from 'camelcase-keys';
import ApiService from '../../services/APIService'

const initialState: InitialStateMovie = {
  movies: []
}

export default function MovieReducer(
  state = initialState,
  action: MovieActions
): InitialStateMovie {
  switch (action.type) {
    case ActionTypes.GOT_MOVIES:
      const res = camelcaseKeys(action.movies.data);
      return {
        ...state,
        movies: res
      }
    default:
      return state
  }
}

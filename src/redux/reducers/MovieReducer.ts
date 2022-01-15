import { InitialStateMovie } from "../../types"
import { ActionTypes, MovieActions } from "../actions/actionTypes/actionTypes";
import camelcaseKeys from 'camelcase-keys';
import { Genres } from "../../model/enums/Genres";

const initialState: InitialStateMovie = {
  movies: [],
  totalAmount: 0,
  totalPages: 0,
  currentPage: 1,
  chosenGenre: Genres.ALL
}

export default function MovieReducer(
  state = initialState,
  action: MovieActions
): InitialStateMovie {
  switch (action.type) {
    case ActionTypes.GOT_MOVIES:
      return {
        ...state,
        movies: camelcaseKeys(action.movies.data),
        chosenGenre: action.chosenGenre,
        totalAmount: action.totalAmount,
        totalPages: Math.ceil(action.totalAmount / 8),
        currentPage: 1
      }
    case ActionTypes.UPDATE_CURRENT_PAGE_WITH_MOVIES:
      return {
        ...state,
        currentPage: action.page,
        movies: camelcaseKeys(action.movies.data),
      }
    default:
      return state
  }
}

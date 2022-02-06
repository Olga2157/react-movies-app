import camelcaseKeys from 'camelcase-keys';
import { InitialStateMovie } from '../../types';
import { ActionTypes, MovieActions } from '../actions/actionTypes/actionTypes';
import { Genres } from '../../model/enums/Genres';

const initialState: InitialStateMovie = {
  movies: [],
  totalAmount: 0,
  totalPages: 0,
  currentPage: 1,
  chosenGenre: Genres.ALL,
  congratsModal: false
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
    case ActionTypes.UPDATE_CONGRATS_MODAL_STATUS:
      return {
        ...state,
        congratsModal: !state.congratsModal,
      }
    default:
      return state
  }
}

import { InitialStateMovie } from "../../types"
import { ActionTypes, MovieActions } from "../actions/actionTypes/actionTypes";

const initialState: InitialStateMovie = {
  movies: [
    {
      id: 1,
      title: 'Star Wars!!: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
      overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      duration: 154,
      rating: 4.9,
      tagline: 'The Saga Continues',
    }
  ]
}

export default function MovieReducer(
  state = initialState,
  action: MovieActions
): InitialStateMovie {
  switch (action.type) {
    case ActionTypes.GET_MOVIES:
      // getting from api
      const newMoviesFromAPI = [
        {
          id: 1,
          title: 'Star Wars: The Last Jedi',
          posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
          year: 2017,
          genre: 'Fantasy',
          overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          duration: 154,
          rating: 4.9,
          tagline: 'The Saga Continues',
        }
      ];
      return {
        ...state,
        movies: newMoviesFromAPI,
      }
    default:
      return state
  }
}

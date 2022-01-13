
export interface GetMovies {
  type: ActionTypes.GET_MOVIES
  currencyType: string
}

export type MovieActions = GetMovies

export enum ActionTypes {
  GET_MOVIES = 'GET_MOVIES',
}

import { RootState } from '../../store';
import { InitialStateMovie } from '../../types';

export const moviesDataSelector = ({
  movieReducer,
}: RootState): InitialStateMovie => movieReducer

export const moviesTotalPagesSelector = ({
  movieReducer,
}: RootState): number =>  movieReducer.totalPages


export const congratsModalStatusSelector = ({
   movieReducer,
}: RootState): boolean =>  {
    return movieReducer.congratsModal
}
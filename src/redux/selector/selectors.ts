import { RootState } from '../../store';
import { InitialStateMovie } from '../../types';

export const moviesDataSelector = ({
  movieReducer,
}: RootState): InitialStateMovie => movieReducer

import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { getMoviesCreator } from '../../../redux/actions/actionCreators/actionCreators';
import { moviesDataSelector } from '../../../redux/selector/selectors';
import { Movie } from './Movie';
import './MovieList.scss';

export const MovieList: FC = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(moviesDataSelector);
  useEffect(() => {
    dispatch(getMoviesCreator());
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <div key={movie.id} className="item"><Movie movieInfo={movie} /></div>
      ))}
    </Container>
  );
};

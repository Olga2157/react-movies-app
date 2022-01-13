import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import { moviesDataSelector } from '../../../redux/selector/selectors';
import { MovieInfo, MovieInfoDetails } from '../../../types';
import { Movie } from './Movie';
import './MovieList.scss';

export const MovieList: FC = () => {
  // const movies: MovieInfoDetails[] = [];
  const { movies } = useSelector(moviesDataSelector)
  // const movies: MovieInfo[] = [
  //   {
  //     id: 1,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 2,
  //     title: 'Black Panther',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
  //     year: 2018,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 3,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Animation, Adventure,Family, Comedy',
  //   },
  //   {
  //     id: 4,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 5,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 6,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 7,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  //   {
  //     id: 8,
  //     title: 'Star Wars: The Last Jedi',
  //     posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
  //     year: 2017,
  //     genre: 'Fantasy',
  //   },
  // ];

  return (
    <Container>
      {movies.map((movie) => (
        <div key={movie.id} className="item"><Movie movieInfo={movie} /></div>
      ))}
    </Container>
  );
};

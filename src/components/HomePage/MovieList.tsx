import * as React from 'react';
import { Container } from 'reactstrap';
import { MovieInfo } from '../../types';
import Movie from './Movie';

type MovieListProps = {
  movieId?: string;
}
type MovieListState = {}
class MovieList extends React.Component<MovieListProps, MovieListState> {
  private static movies: MovieInfo[] = [
    {
      id: 1,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
    {
      id: 2,
      title: 'Black Panther',
      posterPath: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      year: 2018,
      genre: 'Fantasy',
    },
    {
      id: 3,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Animation, Adventure,Family, Comedy',
    },
    {
      id: 4,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
    {
      id: 5,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
    {
      id: 6,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
    {
      id: 7,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
    {
      id: 8,
      title: 'Star Wars: The Last Jedi',
      posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      year: 2017,
      genre: 'Fantasy',
    },
  ];

  render() {
    return (
      <Container>
        {MovieList.movies.map((movie, id) => (
          <div key={id} className="item d-flex flex-column movie-area"><Movie movieInfo={movie} /></div>
        ))}
      </Container>
    );
  }
}
export default MovieList;

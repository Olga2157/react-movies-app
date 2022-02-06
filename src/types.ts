import { Genres } from './model/enums/Genres';

export type FilterButtonInfo = {
  buttonId: string;
  buttonText: string;
  };

export type MovieInfo = {
    id: number;
    title: string;
    posterPath: string;
    releaseDate: string;
    genres: string[];
  }

  export type MovieInfoDetails  = MovieInfo & {
    overview: string;
    runtime: number;
    rating: number;
    tagline: string;
  }

  export type PaginationItemInfo = {
    pageKey: number;
    active: boolean;
  } 

  export type InitialStateMovie  =  {
    movies: MovieInfoDetails[];
    totalAmount: number;
    totalPages: number;
    currentPage: number;
    chosenGenre: Genres,
    genresCurrentMovie: string[]
  }

  export type MovieResults = {
    totalAmount: number;
    data: MovieInfoDetails[];
  }

  export type FilterSearch = {
    sortBy?: string,
    sortOrder?: 'asc' | 'desc',
    search?: string,
    searchBy?: 'genres' | 'title',
    filter?: Genres
  }

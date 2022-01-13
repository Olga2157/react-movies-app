export type FilterButtonInfo = {
  buttonId: string;
  buttonText: string;
  };

export type MovieInfo = {
    id: number;
    title: string;
    posterPath: string;
    year: number;
    genre: string;
  }

  export type MovieInfoDetails  = MovieInfo & {
    overview: string;
    duration: number;
    rating: number;
    tagline: string;
  }

  export type PaginationItemInfo = {
    pageKey: number;
    active: boolean;
  } 

  export type InitialStateMovie  =  {
    movies: MovieInfoDetails[];
  }

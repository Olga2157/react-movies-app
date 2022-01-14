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
  }

  export type MovieResults = {
    totalAmount: number;
    data: MovieInfoDetails[];
  }

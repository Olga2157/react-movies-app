import { FC } from 'react';
import { MovieInfo } from '../../types';
import { AppText } from '../shared/Text/AppText';
import BurgerMenu from './BurgerMenu';

type MovieProps = {
  movieInfo: MovieInfo
};

export const Movie: FC<MovieProps> = (props) => {
  
    const {
      posterPath, title, genre, year,
    } = props.movieInfo;
    const { movieInfo } = props;
    
    return (
      <>
        <div>
          <img src={posterPath} alt="" />
          <BurgerMenu movieInfo={movieInfo} />
        </div>
        <div className="d-flex flex-row justify-content-between movie-details">
          <div className="p-2">
            <AppText text={title} />
          </div>
          <div className="p-2">
            <AppText text={year.toString()} />
          </div>
        </div>
        <div className="p-2 movie-details-genre">
          <AppText text={genre} />
        </div>
      </>
    );
};

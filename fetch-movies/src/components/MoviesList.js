import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.tokens}
          title={movie.value}
          releaseDate={movie.year}
        />
      ))}
    </ul>
  );
};

export default MovieList;

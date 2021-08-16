import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchMoviesHandler() {
    setIsLoading(true);

    fetch('https://twitter.github.io/typeahead.js/data/films/post_1960.json')
      .then(x => {
        if (!x.ok) throw new Error(x.statusText)
        return x;
      })
      .then(x => x.json())
      .then(x => setMovies(x))
      .catch(error => error.message)

    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );

}

export default App;

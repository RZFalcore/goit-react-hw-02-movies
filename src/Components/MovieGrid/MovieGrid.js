import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import '../styles.css';

const MovieGrid = ({ movies }) => {
  return (
    <ul className="movieGrid">
      {movies.length === 0 ? (
        <p>No matching results!</p>
      ) : (
        movies.map(movie => (
          <li key={movie.id}>
            <MovieCard film={movie} />
          </li>
        ))
      )}
    </ul>
  );
};

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieGrid;

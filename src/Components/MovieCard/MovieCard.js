import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const MovieCard = ({ film }) => (
  <div className="movieCard">
    <img src={film.posterUrl} alt={film.title} className="img" />
    <div className="content">
      <h2 className="title">{film.title}</h2>
      <p className="descr">{film.overview}</p>
    </div>
  </div>
);

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;

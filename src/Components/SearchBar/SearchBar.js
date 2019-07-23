import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const SearchBar = ({ value, onSearch }) => (
  <input type="text" className="input" value={value} onChange={onSearch} />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

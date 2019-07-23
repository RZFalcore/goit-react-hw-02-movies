import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import movies from './movie.json';

const handleSearchRender = (mov, searchValue) => {
  return mov.filter(movie =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    const SearchRender = handleSearchRender(movies, searchValue);

    return (
      <div>
        <SearchBar value={searchValue} onSearch={this.handleSearch} />
        <MovieGrid movies={SearchRender} />
      </div>
    );
  }
}

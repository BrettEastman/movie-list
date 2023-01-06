import React from 'react';
// import React, { Component } from "react";
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';

const App = () => {
  const [query, setQuery] = React.useState('');

  let movies = [
    {title: 'Mean Girls', id: 1},
    {title: 'Hackers', id: 2},
    {title: 'The Grey', id: 3},
    {title: 'Sunshine', id: 4},
    {title: 'Ex Machina', id: 5},
  ];

  let filtered = [...movies].filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase())
  })

  const searchMovies = function() {

  };

  const handleQ = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div>Movies
        <Search handleChange={handleQ} value={query} handleSearch={searchMovies}/>
      </div>
      <div>
        <MovieList movies={filtered} />
      </div>
   </div>

  );
};

export default App;
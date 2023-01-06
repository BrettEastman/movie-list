import React from 'react';
// import React, { Component } from "react";
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';

const App = () => {
  let movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <div>
      <div>Movies
        <Search movies={movies}/>
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
   </div>

  );
};

export default App;
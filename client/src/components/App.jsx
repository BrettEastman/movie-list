import React from 'react';
// import React, { Component } from "react";
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';

const App = () => {
  let movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <div>Movies
     <MovieList movies={movies} />
    </div>
  );
};

export default App;
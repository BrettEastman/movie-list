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
  console.log('in App filtered movies are', filtered)

  return (
    <div>
      <div>Movies
        <Search setQuery={setQuery}/>
      </div>
      <div>
        <MovieList movies={filtered} />
      </div>
   </div>

  );
};

export default App;
import React from 'react';
// import React, { Component } from "react";
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import AddInput from './AddInput.jsx';

const App = () => {
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([
    {title: 'Mean Girls', id: 1},
    {title: 'Hackers', id: 2},
    {title: 'The Grey', id: 3},
    {title: 'Sunshine', id: 4},
    {title: 'Ex Machina', id: 5},
  ]);

  // write function to add movie with id first
  // stack?
  // pass function down - as far down as needed, 
  // useEffect - will run once component has been mounted takes in cb and dependency - tells react when to re-run

  let filtered = [...movies].filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase())
  })
  console.log('in App filtered movies are', filtered)

  return (
    <div>
        <h1>Movies</h1>
      <div>
        <AddInput setMovies={setMovies}/>
      </div>
      <div>
        <Search setQuery={setQuery}/>
      </div>
      <div>
        <MovieList movies={filtered} />
      </div>
   </div>

  );
};

export default App;
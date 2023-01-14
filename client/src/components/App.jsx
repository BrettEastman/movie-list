import React, { useState, useEffect } from 'react';
// import React, { Component } from "react";
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import AddInput from './AddInput.jsx';
import axios from 'axios';

export const App = () => { // example of named import
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('/movies')
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

// no default due to changing to named import
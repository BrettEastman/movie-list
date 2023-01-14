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

  const updateMovies = function(movie) {
    setMovies([...movies, {id: 100, title: movie, watched: 1}]);
  }

  const createMovie = function(movie) {
    axios.post('/movies', {title: movie, watched: 1})
      .then(function(res) {
        console.log('received: ', res);
        getMovies().then(({ data }) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  const getMovies = function() {
    return axios.get('/movies')
  }

  useEffect(() => {
    getMovies().then(({ data }) => {
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
        <AddInput handleAdd={createMovie}/>
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
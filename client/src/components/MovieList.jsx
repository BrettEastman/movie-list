import React from 'react';
// import React, { Component } from "react";
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({ movies }) => {

  return (
    <ul>
      {movies.map((item) => {
        return <MovieListItem key={item.id} movie={item.title} />
      })}
    </ul>
  )
};

export default MovieList;
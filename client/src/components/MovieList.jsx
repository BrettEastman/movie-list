import React from 'react';
// import React, { Component } from "react";
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {
  // props.movies is the array of movie objects
  const { movies } = props;

  return (
    <ul>
      {movies.map((item) => {
        // console.log(item);
        return <MovieListItem movie={item.title} />
      })}
    </ul>
  )
};

export default MovieList;
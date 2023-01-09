import React from 'react';
// import React, { Component } from "react";
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({ movies }) => {

  return (
    <div>
      {movies.length === 0 ?
      (<div>no movie by that name found</div>) :
      (<ul>
        {movies.map((item) => {
          return <MovieListItem key={item.id} movie={item.title} />
        })}
      </ul>)}
    </div>
  )
};

export default MovieList;
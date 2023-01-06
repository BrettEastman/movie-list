import React from 'react';
// import React, { Component } from "react";

const MovieListItem = (props) => {
  const { movie } = props;
  // console.log(movie);

  return (
    <li>{movie}</li>
  )
};

export default MovieListItem;
import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({ movies, changeWatched }) => {

  return (
    <div>
      {movies.length === 0 ?
      (<div>no movie by that name found</div>) :
      (<ul>
        {movies.map((item) => {
          return <MovieListItem key={item.id} movie={item} changeWatched={changeWatched}/>
        })}
      </ul>)}
    </div>
  )
};

export default MovieList;
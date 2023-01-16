import React from 'react';

const MovieListItem = ({ movie, changeWatched }) => {
  const { id, title, watched } = movie;

  return (
    <div>
      {watched === 1 ?
      (<li>{title}
        <button style={{backgroundColor: 'green', color: 'white', fontWeight: '700'}} onClick={() => {changeWatched({id, title, watched})}}>watched</button>
      </li>) :
      (<li>{title}
        <button style={{backgroundColor: 'white', color: 'green', fontWeight: '700'}} onClick={() => {changeWatched({id, title, watched})}}>watched</button>
      </li>)}
    </div>
  )
};

export default MovieListItem;
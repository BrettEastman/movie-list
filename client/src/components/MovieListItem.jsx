import React from 'react';

const MovieListItem = ({ title, seen, changeWatched }) => {
  // const { movie } = props;

  return (
    <div>
      {seen === 1 ?
      (<li>{title}
        <button style={{backgroundColor: 'green', color: 'white', fontWeight: '700'}} onClick={() => {changeWatched({title, seen})}}>watched</button>
      </li>) :
      (<li>{title}
        <button style={{backgroundColor: 'white', color: 'green', fontWeight: '700'}} onClick={() => {changeWatched({title, seen})}}>watched</button>
      </li>)}
    </div>
  )
};

export default MovieListItem;
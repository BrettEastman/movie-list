import React from 'react';

const Search = ({ movies }) => {
  const [getQuery, setGetQuery] = React.useState('');

  const searchMovies = function(input) {
    for (var movie of movies) {
      if (input === movie.title) {
        console.log('true');
      }
    }
    console.log('false');
  };

  const handleQ = (event) => {
    event.preventDefault();
    setGetQuery(event.target.value);
    searchMovies(getQuery);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleQ}
        value={getQuery} />
      <button type="submit">Search</button>
    </div>
  )
};

export default Search;

// return (
//   <div>
//     <label for="site-search">Search movies:</label>
//     <input type="text" id="site-search" value={getQuery} />
//     <button onclick={(event) => {
//       setGetQuery(event.target.value);
//       clearTimeout(debounce);
//       debounce = setTimeout(() => handleQ(getQuery, 500));}}>Search</button>
//   </div>
// )
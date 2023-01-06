import React from 'react';

const Search = ({ handleChange, value, handleSearch }) => {

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={value} />
      <button onClick={handleSearch}>Search</button>
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
import React, {useState} from 'react';

const Search = ({ handleChange, value, handleSearch }) => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={(event) => setInput(event.target.value)}
        value={input} />
      <button onClick={() => handleSearch(input)}>Search</button>
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
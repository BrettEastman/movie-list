import React, {useState} from 'react';

const Search = ({ setQuery }) => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={(event) => setInput(event.target.value)}
        value={input} />
      <button onClick={() => setQuery(input)}>Search</button>
    </div>
  )
};

export default Search;
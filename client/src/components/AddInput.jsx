import React, {useState} from 'react';

const AddInput = ({ setMovies }) => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Add movie title here"
        onChange={(event) => setInput(event.target.value)}
        value={input} />
      <button style={{backgroundColor: 'green', color: 'white', fontWeight: '700'}} onClick={() => setQuery(input)}>Add</button>
    </div>
  )
};

export default AddInput;
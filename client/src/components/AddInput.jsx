import React, {useState} from 'react';

const AddInput = ({ handleAdd }) => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Add movie title here"
        onChange={(event) => setInput(event.target.value)}
        value={input} />
      <button style={{backgroundColor: 'green', color: 'white', fontWeight: '700'}} onClick={() => handleAdd(input)}>Add</button>
    </div>
  )
};

export default AddInput;
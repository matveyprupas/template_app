import { useState } from 'react';
import './App.css';

function InputFiels({onSearch}) {

  const [searchText, setSearchText] = useState('');

  console.log('InputFiels RENDERS');

  return (    
    <>
      <input 
        value={searchText} 
        onChange={(event) => setSearchText(event.target.value)} 
      />

      <button 
        onClick={() => onSearch(searchText)}
      >
      Search
      </button>
    </>

  );
}

export default InputFiels;

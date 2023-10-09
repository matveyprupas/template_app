import { useEffect, useState } from 'react';

function SearchInput({value, onChange}) {

  console.log('SearchInput RENDERS');
  return (
    <>
      <label htmlFor='search-by-name'>
        Insert name: 
        <input type='text' id='search-by-name' onChange={(event) => onChange(event.target.value)} value={value}/>
      </label>
    </>
  );
}

export default SearchInput;

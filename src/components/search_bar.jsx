import React, { useState } from 'react';

function SearchBar({ search }) {
  const [searchterm, setSearchTerm] = useState('');

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input onChange={onInputChange} value={searchterm} placeholder="search" />
    </div>
  );
}

export default SearchBar;

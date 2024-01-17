import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input onChange={onInputChange} value={searchTerm} placeholder="Enter search here..." />
    </div>
  );
}

export default SearchBar;

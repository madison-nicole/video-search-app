import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input onChange={onInputChange} value={searchTerm} placeholder="Enter search here..." />
    </div>
  );
}

export default SearchBar;

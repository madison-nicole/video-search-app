import React from 'react';

function SearchBar({ onSearchChange }) {
  const onInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search">
      <input placeholder="Enter search here..." onChange={onInputChange} />
    </div>
  );
}

export default SearchBar;

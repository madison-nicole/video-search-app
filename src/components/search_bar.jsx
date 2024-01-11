import { event } from 'jquery';
import React, { useCallback, useEffect, useState } from 'react';

const [searchterm, setSearchTerm] = useState('');

function SearchBar() {
  // eslint-disable-next-line no-restricted-globals
  setSearchTerm(event.target.value);

  // pass the search method down to SearchBar
  // eslint-disable-next-line no-undef
  props.onSearchChange(event.target.value);

  // eslint-disable-next-line no-shadow
  const onInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <SearchBar onSearchChange={search} id="search-bar" />
      <input onChange={onInputChange} value={searchterm} placeholder="search" />
    </div>
  );
}

export default SearchBar;

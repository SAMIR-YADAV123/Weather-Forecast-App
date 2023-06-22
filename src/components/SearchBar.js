import React from 'react';

import './SearchBar.css';

const SearchBar = ({ city, onCityChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
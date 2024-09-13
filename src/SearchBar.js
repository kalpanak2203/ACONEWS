import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for news..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍 Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

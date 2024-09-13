import React from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleFilterChange} className="filter-select">
          <option value="">All</option>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="country">Country:</label>
        <select name="country" id="country" onChange={handleFilterChange} className="filter-select">
          <option value="">All</option>
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
          <option value="fr">France</option>
          <option value="in">India</option> 
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="language">Language:</label>
        <select name="language" id="language" onChange={handleFilterChange} className="filter-select">
          <option value="">All</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

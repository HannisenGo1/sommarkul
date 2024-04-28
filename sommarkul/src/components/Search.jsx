import React from 'react';

const SearchField = ({ searchProducts}) => {
  return (
    <div className="search-label">
      <p> Sök efter produkt</p>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Sök efter produkt"
      />
    </div>
  );
};

export default SearchField
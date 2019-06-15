import React from 'react';


const SearchBar = (props) => (
    <div className="search__container">
    <p className="search__title">
        Go ahead, Search any movie
    </p>
      <input 
        className="search__input" 
        type="text" 
        value={props.searchInput} 
        onChange={props.handleChange}
        placeholder="Search for a movie"
      />
</div>
);

export default SearchBar;

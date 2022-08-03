import React from 'react'

const Search = ({ setSearch }) => {
  let searchBtn = (event) => {
    event.preventDefault();
  }
  return (
    <form className='search-form'>
      <input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Search for Card"
        className='input-search-card'
        type="text"
      />
      <button
        onClick={searchBtn}
        className='btn btn-primary fs-5'
      > 
        Search
      </button>
    </form>
  );
}

export default Search;
import React from 'react'
import { BsSearch } from "react-icons/bs";


const Search = ({ setSearch }) => {
  let searchBtn = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <style jsx>
        {`
          .input-search-card {
            border-radius: 10px;
            border-color: #FFC300;
          }
          
          @media (min-width: 768px) {
            .input-search-card {
              width: 100%;
            }
            .search-form {
              padding: 0 220px 0 220px;
            }
            
          }
          @media (min-width: 992px) {
            .input-search-card {
              width: 100%;
            }
            .search-form {
              padding: 0 240px 0 240px;
            }
          }
          @media (min-width: 1200px) {
            .input-search-card {
              width: 100%;
            }
            .search-form {
              padding: 0 260px 0 260px;
            }
          }
          }

        `}
      </style>

      <form className='search-form d-flex aling-items-center justify-content-center'>
        <input
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Search for Card"
          className='input-search-card me-3'
          type="text"
        />
        <button
          onClick={searchBtn}
          className='btn btn-warning rounded-circle d-flex justify-content-center p-3'
        > 
          <BsSearch />
        </button>
      </form>
    </>
  );
}

export default Search;
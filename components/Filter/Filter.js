import React from 'react'
import Type from './Type/Type'

const Filter = ({ updateType }) => {
  let clear = () => {
    updateType("")
    window.location.reload(false)
  }
  return (
    <div>
      <h2>Filters</h2>
      <div className="dropdown">
        <button className='btn btn-primary' onClick={clear}>
          clear
        </button>
        <div>
          <Type 
            updateType={updateType}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
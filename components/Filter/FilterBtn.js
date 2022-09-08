import React from 'react'

const FilterBtn = ({ input, task, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
          color: #0b5ed7 }
          input[type="radio"] { display: none; }
        `}
      </style>
    
      <div className="form-chec justify-start p-0">
        <input
          className="form-check-input x" type="radio"
          name={name} id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input); 
          }}
          className="y p-2"
          name={`${name}-${index}`}
        > {input} </label>
      </div>

  </div>
  );
}

export default FilterBtn;
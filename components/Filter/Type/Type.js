import React from 'react'
import FilterBtn from '../FilterBtn'

const Type = ({ updateType }) => {
  let type = ['Skill Card', 'Spell Card', 'Trap Card', 'Normal Monster', 'Normal Tuner Monster', 'Effect Monster', 'Tuner Monster', 'Flip Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Spirit Monster', 'Union Effect Monster', 'Gemini Monster', 'Pendulum Effect Monster', 'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Monster', 'Ritual Effect Monster', 'Toon Monster', 'Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'Synchro Pendulum Effect Monster', 'XYZ Monster', 'XYZ Pendulum Effect Monster', 'Link Monster', 'Pendulum Flip Effect Monster', 'Pendulum Effect Fusion Monster', 'Token']
  return (
    <div className="dropdown">
      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Type
      </button>
    <ul className="dropdown-menu">
      {type.map((item, index) => (
        <div key={index}>
          <li className="dropdown-item">
            <FilterBtn
              key={index}
              index={index}
              name="Type"
              task={updateType}
              input={item}
            />
          </li>
        </div>
      ))}
    </ul>
  </div>
  );
}

export default Type;
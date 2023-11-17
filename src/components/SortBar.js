import React from 'react';

const SortBar = ({ onSortChange }) => {
  return (
    <div>
      <h3>Sort Bots</h3>
      <label>
        Sort by:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;

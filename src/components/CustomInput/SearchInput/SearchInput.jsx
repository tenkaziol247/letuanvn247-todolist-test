import React from 'react';

import './SearchInput.scss';

function SearchInput({value, name, placeholder, disabled, onChange}) {
  return (
    <div className='SearchInput'>
      <input
        type='search'
        className="SearchInput-input"
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;

import React, { useRef } from 'react';
import classNames from 'classnames';
import { TiArrowSortedDown } from 'react-icons/ti';

import InputError from '../InputError/InputError';
import InputLabel from '../InputLabel/InputLabel';

import './SelectInput.scss';

function SelectInput({
  label,
  name,
  value,
  required,
  disabled,
  options,
  errorMessage,
  onChange,
  onBlur,
  placeholder,
}) {
  const selectRef = useRef(null);

  const classes = classNames('SelectInput-input', { hasError: errorMessage });

  const handleClickSelect = () => {
    if(selectRef) {
      selectRef.current.click();
    }
  }

  return (
    <div className='SelectInput'>
      {label && <InputLabel required={required} label={label} />}
      <div className='SelectInput-inputContainer'>
        <select
          ref={selectRef}
          className={classes}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
        </select>
        <span className='SelectInput-arrow' onClick={handleClickSelect}>
          <TiArrowSortedDown fontSize={20} onClick={handleClickSelect}/>
        </span>
      </div>
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </div>
  );
}

export default SelectInput;

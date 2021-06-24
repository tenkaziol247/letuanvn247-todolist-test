import React from 'react';
import classNames from 'classnames';

import InputLabel from '../InputLabel/InputLabel';
import InputError from '../InputError/InputError';

import './TextInput.scss';

function TextInput({
  label,
  required,
  errorMessage,
  name,
  value,
  placeholder,
  disabled,
  maxLength,
  onChange,
  onBlur,
}) {
  const classes = classNames('TextInput-input', { hasError: errorMessage });

  return (
    <div className='TextInput'>
      {label && <InputLabel required={required} label={label} />}
      <input
        type='text'
        className={classes}
        value={value}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </div>
  );
}

export default TextInput;

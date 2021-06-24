import React from 'react';
import classNames from 'classnames';

import InputError from '../InputError/InputError';
import InputLabel from '../InputLabel/InputLabel';

import './TextAreaInput.scss';

function TextAreaInput({
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
  const classes = classNames('TextAreaInput-textarea', {
    hasError: errorMessage,
  });

  return (
    <div className='TextAreaInput'>
      {label && <InputLabel required={required} label={label} />}
      <textarea
        type='text'
        className={classes}
        value={value}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        rows={6}
      />
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </div>
  );
}

export default TextAreaInput;

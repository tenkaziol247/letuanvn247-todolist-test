import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

import InputError from '../InputError/InputError';
import InputLabel from '../InputLabel/InputLabel';

import './DateInput.scss';

function DateInput({
  required,
  label,
  errorMessage,
  onChange,
  onBlur,
  value,
  disabled,
  name,
  placeholder,
}) {
  const classes = classNames('DateInput-input', { hasError: errorMessage });

  return (
    <div className='DateInput'>
      {label && <InputLabel required={required} label={label} />}
      <input
        className={classes}
        type='date'
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        name={name}
        min={moment().format('YYYY-MM-DD')}
        placeholder={placeholder}
      />
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </div>
  );
}

export default DateInput;

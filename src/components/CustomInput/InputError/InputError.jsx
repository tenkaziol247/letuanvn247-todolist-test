import React from 'react';

import './InputError.scss';

function InputError({ errorMessage }) {
  return <small className='InputError'>{errorMessage}</small>;
}

export default InputError;

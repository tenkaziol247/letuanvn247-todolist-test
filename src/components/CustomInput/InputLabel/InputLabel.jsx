import React from 'react';

import './InputLabel.scss';

function InputLabel({label, required}) {
  return (
    <div className='InputLabel'>
      <span>{label}</span>
      {required && <span className='InputLabel-required'>*</span>}
    </div>
  );
}

export default InputLabel;

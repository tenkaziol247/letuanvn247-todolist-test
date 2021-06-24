import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CustomButton.scss';

function CustomButton({ color = 'primary', fullWidth, size = 'normal', handleClick, children }) {
  const classes = classNames('CustomButton', color, { fullWidth }, size);

  return <button className={classes} onClick={handleClick}>{children}</button>;
}

CustomButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['normal', 'large', 'small']),
  fullWidth: PropTypes.bool,
};

export default CustomButton;

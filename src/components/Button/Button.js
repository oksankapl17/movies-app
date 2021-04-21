import React from 'react';

const CN = 'default-btn';

export const Button = (props) => {
  const {className='', type = 'button', disabled = 'disabled', label='label', onClick} = props;

  const onClickHandler = () => {
    onClick && onClick();
  };

  return (
    <button
    className={`${CN} ${className}`}
    onClick={onClickHandler}
    disabled={disabled}
    type={type}
    >
      {label}
    </button>
  )
}

import React from 'react';
import css from './button.module.css';
import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
};

export default Button;

import React, { useEffect } from 'react';
import css from './modal.module.css';
import propTypes from 'prop-types';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const onCloseEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseEsc);

    return () => {
      window.removeEventListener('keydown', onCloseEsc);
    };
  });

  const closeOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={closeOverlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: propTypes.func,
};

export default Modal;

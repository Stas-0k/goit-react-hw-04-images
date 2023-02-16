import React, { useState } from 'react';
import Modal from '../modal/Modal';
import css from './image-gallery.module.css';
import propTypes from 'prop-types';

function ImageGalleryItem({ image }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <li onClick={() => setModal(true)} className={css.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt="img"
          className={css.ImageGalleryItem_image}
        />
      </li>
      {modal && (
        <Modal
          onClose={() => setModal(false)}
          largeImageURL={image.largeImageURL}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;

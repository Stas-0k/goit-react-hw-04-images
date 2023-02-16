import React from 'react';
import ImageGalleryItem from '../image-gallery-item/ImageGalleryItem';
import css from './image-gallery.module.css';
import propTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired
  )
};

export default ImageGallery;

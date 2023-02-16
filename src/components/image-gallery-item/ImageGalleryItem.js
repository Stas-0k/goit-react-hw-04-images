import React, { Component } from 'react';
import Modal from '../modal/Modal';
import css from './image-gallery.module.css';
import propTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  handleClick = () => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.image;

    return (
      <>
        <li onClick={this.handleClick} className={css.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt="img"
            className={css.ImageGalleryItem_image}
          />
        </li>
        {this.state.modalOpen && (
          <Modal onClose={this.handleClick} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    webformatURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;

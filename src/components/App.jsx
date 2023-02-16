import React, { Component } from 'react';
import fetchImages from 'api';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    total: 0,
    loader: false,
  };

  handleSubmit = query => {    
      this.setState({ query: query, page: 1, loader: true });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page)
        .then(response => {
          this.setState(prevState => ({
            images:
              page === 1
                ? [...response.hits]
                : [...prevState.images, ...response.hits],
            total: response.totalHits,
          }));
        })
        .finally(() => {
          this.setState({ loader: false });
        });
    }
  }

  handleClick = () => {
    this.setState(({ page }) => ({ page: page + 1, loader: true }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.loader && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && this.state.images.length<this.state.total && (<Button onClick={this.handleClick} />)}
      </div>
    );
  }
}

export default App;

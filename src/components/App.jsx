// import React, { useState, useEffect } from 'react';
// import fetchImages from 'api';
// import Searchbar from './searchbar/Searchbar';
// import ImageGallery from './image-gallery/ImageGallery';
// import Button from './button/Button';
// import Loader from './loader/Loader';

// function App() {
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [loader, setLoader] = useState(false);

//   const handleSubmit = query => {
//     setQuery(query);
//     setPage(1);
//     setLoader(true);
//   };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query || prevState.page !== page) {
//       fetchImages(query, page)
//         .then(response => {
//           this.setState(prevState => ({
//             images:
//               page === 1
//                 ? [...response.hits]
//                 : [...prevState.images, ...response.hits],
//             total: response.totalHits,
//           }));
//         })
//         .finally(() => {
//           this.setState({ loader: false });
//         });
//     }
//   }


//   const handleClick = () => {
//     setPage(prev => prev + 1);
//     setLoader(true);
//   };

//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr',
//         gridGap: 16,
//         paddingBottom: 24,
//       }}
//     >
//       <Searchbar onSubmit={handleSubmit} />
//       {loader && <Loader />}
//       <ImageGallery images={images} />
//       {images.length > 0 && images.length < total && (
//         <Button onClick={handleClick} />
//       )}
//     </div>
//   );
// }

// export default App;




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
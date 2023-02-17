import React, { useState, useEffect } from 'react';
import fetchImages from 'api';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setLoader(true);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchImages(query, page)
      .then(response => {
        setImages(prevImages => {
          if (page === 1) {
            return [...response.hits];
          } else {
            return [...prevImages, ...response.hits];
          }
        });
        setTotal(response.totalHits);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [page, query]);

  const handleClick = () => {
    setPage(prev => prev + 1);
    setLoader(true);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      {loader && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && images.length < total && (
        <Button onClick={handleClick} />
      )}
    </div>
  );
}

export default App;

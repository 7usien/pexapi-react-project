import React, { useEffect, useState } from 'react';
import PhotoList from '../PhotoList/PhotoList';
import styles from './searchbox.module.css';

const { search } = styles;
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);

  const searchHandler = (e) => {
    setSearchTerm(e);
  };

  useEffect(() => {
    const searchimages = async () => {
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${searchTerm}`,
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `${process.env.REACT_APP_API_KEY}`, // notice
            },
          }
        );

        const json = await res.json();
        setPhotos(json.photos);
      } catch (err) {
        console.log(err.message);
      }
    };

    const searchDebounce = () => {
      setTimeout(() => {
        searchimages();
      }, 1500);
    };
    if (searchTerm.length === 0) {
      searchimages();
    } else {
      searchDebounce();
    }
    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchTerm]);

  return (
    <>
      <div className={search}>
        <form>
          <input
            type='text'
            onChange={(e) => {
              searchHandler(e.target.value);
            }}
            placeholder='Search for images...'
          />
          <input type='submit' value='search' />
        </form>
      </div>
      <PhotoList data={photos} term={searchTerm} />
    </>
  );
}

export default SearchBox;

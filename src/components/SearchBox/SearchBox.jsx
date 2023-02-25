import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import PhotoList from '../PhotoList/PhotoList';
import styles from './searchbox.module.css';

const { search } = styles;
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(32); // 4 per row * 6
  const [totalResults, setTotalResults] = useState(0);

  const searchHandler = (e) => {
    setSearchTerm(e);
  };

  useEffect(() => {
    const searchimages = async () => {
      try {
        setLoading(true);
        setTotalResults(null);

        const res = await fetch(
          `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=${postsPerPage}&query=${searchTerm}`,

          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `${process.env.REACT_APP_API_KEY}`, // notice
            },
          }
        );
        const json = await res.json();
        setTotalResults(json.total_results);
        setPhotos(json.photos);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    const searchDebounce = setTimeout(() => {
      if (searchTerm.length > 0) {
        searchimages();
      }
    }, 1500);

    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchTerm, currentPage]);

  return (
    <>
      <div className={search}>
        <form>
          <input
            type='text'
            onChange={(e) => {
              searchHandler(e.target.value);
            }}
            placeholder='try to search for any image here ...'
          />
        </form>
      </div>

      <PhotoList
        count={totalResults}
        loading={loading}
        data={photos}
        term={searchTerm}
      />

      <Pagination
        totalResults={totalResults}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default SearchBox;

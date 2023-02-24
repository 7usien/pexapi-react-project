import { LogoDev } from '@mui/icons-material';
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
  const [postsPerPage, setPostsPerPage] = useState(24); // 4 per row * 6
  const [totalResults, setTotalResults] = useState(0);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const searchHandler = (e) => {
    setSearchTerm(e);
  };

  useEffect(() => {
    const searchimages = async () => {
      try {
        setLoading(true);
        setTotalResults(null);

        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=24?page=${currentPage}`,
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

    console.log(currentPage);

    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchTerm]);

  const currentPosts = photos?.slice(firstPostIndex, lastPostIndex);

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
      <PhotoList
        count={totalResults}
        loading={loading}
        data={currentPosts}
        term={searchTerm}
      />

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPosts={totalResults}
        postsPerpage={postsPerPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default SearchBox;

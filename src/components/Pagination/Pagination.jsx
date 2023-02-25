import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import styles from './pagination.module.css';
import { useState } from 'react';
const Pagination = ({ setCurrentPage, postsPerPage, totalResults }) => {
  const { pagination } = styles;

  const [page, setPage] = useState(2);

  const pageNext = (step) => {
    if (step === 'next') {
      if (page <= Math.ceil(totalResults / postsPerPage)) {
        setPage((prev) => prev + 1);
      }
    } else if (step === 'prev') {
      if (page < 2) {
        setPage(1);
      } else {
        setPage((prev) => prev - 1);
      }
    }

    return setCurrentPage(page);
  };

  return (
    <div className={pagination}>
      <button
        onClick={() => {
          pageNext('prev');
        }}
      >
        <NavigateBeforeIcon />
      </button>
      <button
        onClick={() => {
          pageNext('next');
        }}
      >
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default Pagination;

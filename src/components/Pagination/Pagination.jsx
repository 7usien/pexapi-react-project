import React from 'react';
import styles from './pagination.module.css';
const Pagination = ({
  totalPosts,
  postsPerpage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++) {
    pages.push(i);
  }
  const { pagination, active } = styles;

  return (
    <div className={pagination}>
      {pages.map((page, i) => (
        <button
          className={page == currentPage ? active : ''}
          onClick={() => {
            setCurrentPage(page);
          }}
          key={i}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

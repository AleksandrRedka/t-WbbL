import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = ({
  currentPage,
  filmsPerPage,
  totalFilms,
  changeCurrentPage,
}) => {
  let pagesFilms = [];
  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pagesFilms.push(i);
  }

  return (
    pagesFilms.length > 1 && (
      <div className={styles.paginationContainer}>
        <button
          disabled={currentPage === 1 && true}
          type='button'
          className={styles.paginationButton}
          onClick={() => changeCurrentPage(currentPage - 1)}
        >
          &#8592;
        </button>
        <ul className={styles.pagination}>
          {pagesFilms.map(page => (
            <li
              key={page}
              className={
                currentPage !== page
                  ? styles.paginationLi
                  : styles.paginationLiActive
              }
            >
              <button
                type='button'
                className={styles.paginationLink}
                onClick={() => changeCurrentPage(page)}
                href='#'
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button
          disabled={pagesFilms.length === currentPage && true}
          type='button'
          className={styles.paginationButton}
          onClick={() => changeCurrentPage(currentPage + 1)}
        >
          &#8594;
        </button>
      </div>
    )
  );
};

export default withRouter(Pagination);

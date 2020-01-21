import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortFilms.module.css';

const SortFilm = ({ onSort }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type='button'
        name='lowtohight'
        onClick={onSort}
      >
        A-B
      </button>
      <button
        className={styles.button}
        type='button'
        name='highttolow'
        onClick={onSort}
      >
        B-A
      </button>
    </div>
  );
};

SortFilm.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortFilm;

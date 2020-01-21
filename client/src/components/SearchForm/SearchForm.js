import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';
import shortid from 'shortid';

const generateId = () => shortid.generate();

const SearchForm = ({
  searchFilm,
  searchActor,
  onChangeFilm,
  onChangeActor,
}) => {
  return (
    <form className={styles.form}>
      <label htmlFor={generateId()} className={styles.label}>
        Search Film
        <input
          placeholder='Enter film'
          name='search'
          value={searchFilm}
          autoComplete='off'
          onChange={onChangeFilm}
          autoComplete='off'
        />
      </label>
      <label htmlFor={generateId()} className={styles.label}>
        Search Actor
        <input
          placeholder='Enter actor first name of lastname'
          name='search'
          value={searchActor}
          autoComplete='off'
          onChange={onChangeActor}
          autoComplete='off'
        />
      </label>
    </form>
  );
};

SearchForm.propTypes = {
  searchFilm: PropTypes.string,
  searchActor: PropTypes.string,
  onChangeFilm: PropTypes.func.isRequired,
  onChangeActor: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  searchFilm: '',
  searchActor: '',
};

export default withRouter(SearchForm);

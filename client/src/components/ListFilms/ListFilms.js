import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ListFilms.module.css';
import { GetFilmFromDB } from '../../Api/query';
import { mapper } from '../../helpers/hellpers';

const ListFilms = ({ films, onMore, onDelete, fetchAllFilms }) => {
  useEffect(() => {
    const data = async () => {
      const response = await GetFilmFromDB('/api/film', 'GET');
      fetchAllFilms(mapper(response.data) || []);
    };
    data();
  }, [fetchAllFilms, onDelete]);

  return films.length > 0 ? (
    <ul className={styles.list}>
      {films.map(film => (
        <li key={film.id} className={styles.film}>
          <p>
            {film.title}({film.release})
          </p>
          <div className={styles.buttons}>
            <button
              type='button'
              className={styles.more}
              onClick={() => onMore(film.id)}
            >
              More
            </button>
            <button
              type='button'
              className={styles.delete}
              onClick={() => onDelete(film.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div>Sorry, The list is empty. </div>
  );
};

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onMore: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListFilms;

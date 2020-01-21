import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { toastShow } from '../../helpers/hellpers';
import styles from './FormCreate.module.css';
import { CreateFilmOnDB } from '../../Api/query';

const generateId = () => shortid.generate();

const FormCreate = () => {
  const [film, setFilm] = useState({
    title: '',
    release: 1970,
    format: '',
    actors: '',
  });

  const handleChangeFilm = ({ target }) => {
    const { name, value } = target;
    setFilm({
      ...film,
      [name]: value,
    });
  };

  const createFilmServer = async () => {
    const { title, release, format, actors } = film;
    try {
      await CreateFilmOnDB('api/film', 'POST', {
        title,
        release,
        format,
        actors,
      }).then(
        data =>
          data.data.status === 201 &&
          toastShow('Cool! You created film 👌🏻👌🏻👌🏻', 'success'),
      );
    } catch (e) {}
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const { title, release, format } = film;
    if (title !== '' && release !== '' && format !== '') {
      createFilmServer();
      setFilm({ title: '', release: 1970, format: '', actors: '' });
    } else {
      toastShow('⛔️ Вы не заполнили все поля!', 'error');
    }
  };

  const { title, release, format, actors } = film;
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label className={styles.label} htmlFor={generateId()}>
        Name film
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChangeFilm}
          autoComplete='off'
        />
      </label>
      <label className={styles.label} htmlFor={generateId()}>
        Year release
        <input
          type='number'
          name='release'
          value={release}
          onChange={handleChangeFilm}
          autoComplete='off'
        />
      </label>
      <label className={styles.label} htmlFor={generateId()}>
        Format video
        <input
          type='text'
          name='format'
          value={format}
          onChange={handleChangeFilm}
          autoComplete='off'
        />
      </label>
      <label className={styles.label} htmlFor={generateId()}>
        Actors
        <input
          type='text'
          name='actors'
          value={actors}
          onChange={handleChangeFilm}
          autoComplete='off'
        />
      </label>
      <button type='submit'>Create Film</button>
    </form>
  );
};

FormCreate.propTypes = {
  createFilm: PropTypes.func.isRequired,
};

export default FormCreate;

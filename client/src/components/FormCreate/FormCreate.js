import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { toastShow } from '../../helpers/hellpers';
import styles from './FormCreate.module.css';
import { CreateFilmOnDB } from '../../Api/query';
import SelectFormat from './SelectFormat/SelectFormat';

const generateId = () => shortid.generate();

const FormCreate = () => {
  const [film, setFilm] = useState({
    title: '',
    release: 1970,
    format: 'DVD',
    actors: '',
  });

  const handleChangeFilm = ({ target }) => {
    const { name, value } = target;
    return setFilm({
      ...film,
      [name]: value,
    });
  };

  const changeSelect = ({ value }) => setFilm({ ...film, format: value });

  const createFilmServer = async () => {
    const { title, release, format, actors } = film;
    try {
      await CreateFilmOnDB('api/film', 'POST', {
        title: title.trim(),
        release,
        format,
        actors: actors.trim(),
      }).then(
        data =>
          data.data.status === 201 &&
          toastShow('Cool! You created film 👌🏻👌🏻👌🏻', 'success'),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const validatorActors = actors => {
    const doubleActor = [];
    const actorsValid = actors
      .trim()
      .toLowerCase()
      .split(' ')
      .join('')
      .split(',');
    actorsValid.filter((actor, index) =>
      actorsValid.indexOf(actor) === index ? actor : doubleActor.push(actor),
    );
    return doubleActor;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const { title, release, format, actors } = film;
    if (title !== '' && release !== '' && format !== '' && actors !== '') {
      if (validatorActors(actors).length <= 0) {
        if (1850 <= release || release >= 2020) {
          createFilmServer();
          setFilm({ title: '', release: 1970, format: 'DVD', actors: '' });
        } else {
          return toastShow(
            '❗️❗️❗️The year of manufacture should be in the range from 1850 to 2020.',
            'warning',
          );
        }
      } else {
        return toastShow('⛔️ Removing Duplicate Actors!', 'warning');
      }
    } else {
      return toastShow('⛔️ Fill in the blank fields!', 'warning');
    }
  };

  const { title, release, actors } = film;
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
        <SelectFormat onChange={changeSelect} />
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

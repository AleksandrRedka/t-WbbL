import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalInfoFilm.module.css';

const Modal = ({ item }) => {
  const { title, release, format, actors } = item[0];
  return (
    <div className={styles.modal}>
      <h5>{title}</h5>
      <h6>Year Release:</h6>
      <p>{release}</p>
      <h6>Format:</h6>
      <p>{format.toUpperCase()}</p>
      <h6>Stars:</h6>
      <p>{actors}</p>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
      format: PropTypes.string.isRequired,
      actors: PropTypes.string.isRequired,
    }),
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

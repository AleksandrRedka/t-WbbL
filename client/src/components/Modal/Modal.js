import React from 'react';
import styles from './Modal.module.css';
import ModalInfoFilm from './ModalInfoFilm/ModalInfoFilmContainer';
import ModalDelete from './ModalDelete/ModalDeleteContainer';

const Modal = ({ stateModalInfo, stateModalDelete, closeModal }) => {
  return (
    <div
      className={styles.overlay}
      role='presentation'
      onClick={closeModal}
      id='wrapperModal'
    >
      {stateModalInfo && <ModalInfoFilm />}
      {stateModalDelete && <ModalDelete />}
    </div>
  );
};

export default Modal;

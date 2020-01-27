import React from 'react';
import styles from './ModalDelete.module.css';

const ModalDelete = ({ id, onDelete, onCancel }) => {
  return (
    <div className={styles.modalDelete}>
      <p className={styles.question}>Are you sure...?</p>
      <div className={styles.buttons}>
        <button
          type='button'
          className={styles.button}
          onClick={() => onDelete(id)}
        >
          Yes
        </button>
        <button
          type='button'
          className={styles.button}
          onClick={() => onCancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;

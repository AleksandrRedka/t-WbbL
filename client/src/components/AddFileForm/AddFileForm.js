import React, { useRef } from 'react';
import { unLoad } from '../../Api/query';
import styles from './AddFileForm.module.css';
import shortid from 'shortid';
import { toastShow } from '../../helpers/hellpers';

const generateId = shortid.generate();

const AddFileForm = () => {
  const inputElem = useRef(null);
  const onUnLoad = async e => {
    e.preventDefault();
    const file = inputElem.current.files;
    unLoad(file[0]).then(
      res =>
        res.status === 201 &&
        toastShow('File upload! Check page List Film', 'success'),
    );
  };
  return (
    <form onSubmit={onUnLoad} className={styles.form}>
      <label htmlFor={generateId} className={styles.label}>
        Choose a file
        <input
          id={generateId}
          ref={inputElem}
          type='file'
          encType='multipart/form-data'
          accept='text/plain'
        />
      </label>
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddFileForm;

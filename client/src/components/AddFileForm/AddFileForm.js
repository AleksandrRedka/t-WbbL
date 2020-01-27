import React, { useRef, useState } from 'react';
import { unLoad } from '../../Api/query';
import styles from './AddFileForm.module.css';
import shortid from 'shortid';
import { toastShow } from '../../helpers/hellpers';

const generateId = shortid.generate();

const AddFileForm = () => {
  const inputElem = useRef(null);
  const [nameFile, setNameFile] = useState(null);

  const onChangeFile = e => {
    const file = inputElem.current.files;
    setNameFile(file[0].name);
  };
  const onUnLoad = async e => {
    e.preventDefault();
    const file = inputElem.current.files;
    if (file[0]) {
      return unLoad(file[0]).then(
        res =>
          res.status === 201 &&
          toastShow('File upload! Check page List Film', 'success'),
      );
    }
    toastShow('File not cheked!', 'warning');
  };
  return (
    <form onSubmit={onUnLoad} className={styles.form}>
      <label htmlFor={generateId} className={styles.label}>
        {nameFile && <span>{nameFile}</span>}
        Choose a file
        <input
          id={generateId}
          ref={inputElem}
          type='file'
          encType='multipart/form-data'
          accept='text/plain'
          onChange={onChangeFile}
        />
      </label>
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddFileForm;

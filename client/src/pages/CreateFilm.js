import React from 'react';
import FormCreate from '../components/FormCreate/FormCreatecontainer';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import AddFileForm from '../components/AddFileForm/AddFileForm';
import styles from './cssPage/styles.module.css';

const CreateFilm = () => {
  return (
    <div className={styles.containerCreate}>
      <div className={styles.create}>
        <HeaderTitle title='Create Film' />
        <FormCreate />
      </div>
      <div className={styles.create}>
        <HeaderTitle title='Add you movie file ' />
        <AddFileForm />
      </div>
    </div>
  );
};

export default CreateFilm;

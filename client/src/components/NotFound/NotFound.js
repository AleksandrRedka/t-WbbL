import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div>
      <h1 className={styles.notFoundTitle}>Sorry, pages not found</h1>
      <span role='img' aria-label='emoji'>
        🤨
      </span>
    </div>
  );
};

export default NotFound;

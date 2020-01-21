import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderTitle.module.css';

const HeaderTitle = ({ title }) => (
  <h1 className={styles.headerTitle}>{title}</h1>
);

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitle;

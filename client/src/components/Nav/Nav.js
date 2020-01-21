import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to='/'
          className={styles.navLink}
          activeClassName={styles.linkActive}
          exact
        >
          List Films
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/createfilm'
          className={styles.navLink}
          activeClassName={styles.linkActive}
        >
          Create Film
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;

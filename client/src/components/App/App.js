import React, { Suspense, lazy } from 'react'; /// add useCallback
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './App.module.css';
import Nav from '../Nav/Nav';
import NotFound from '../NotFound/NotFound';
import Modal from '../Modal/ModalContainer';
import * as modalSelectors from '../../redux/modal/modalSelectors';

const AsyncListFilms = lazy(() =>
  import('../../pages/ListFilms' /* webpackChunkName: "list-films-page" */),
);

const AsyncCreateFilm = lazy(() =>
  import('../../pages/CreateFilm' /* webpackChunkName: "create-page" */),
);

const App = ({ modalState }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Nav />
      <div className={styles.app}>
        <Switch>
          <Route path='/' exact component={AsyncListFilms} />
          <Route path='/createFilm' component={AsyncCreateFilm} />
          <Route component={NotFound} />
        </Switch>
      </div>
      {modalState && <Modal />}
      <ToastContainer />
    </Suspense>
  );
};

App.propTypes = {
  modalState: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalState: modalSelectors.getStateModal(state),
});

export default connect(mapStateToProps, null)(App);

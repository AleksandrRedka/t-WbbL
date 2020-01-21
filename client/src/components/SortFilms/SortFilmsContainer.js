import { connect } from 'react-redux';
import SortFilms from './SortFilms';
import * as FilmsActions from '../../redux/films/filmsActions';

const mapDispatchToProps = dispatch => ({
  onSort: e => {
    const { target } = e;
    return dispatch(FilmsActions.sortFilms(target.name));
  },
});

export default connect(null, mapDispatchToProps)(SortFilms);

import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import * as FilmsActions from '../../redux/films/filmsActions';
import * as FilmsSelectors from '../../redux/films/filmsSelectors';

const mapStateToProps = state => ({
  searchFilm: FilmsSelectors.getSearchFilm(state),
  searchActor: FilmsSelectors.getSearchActor(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilm: e => {
    const { target } = e;
    return dispatch(FilmsActions.changeSearch(target.value));
  },
  onChangeActor: e => {
    const { target } = e;
    return dispatch(FilmsActions.changeSearchActor(target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

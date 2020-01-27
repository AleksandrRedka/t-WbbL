import { connect } from 'react-redux';
import ListFilms from './ListFilms';
import * as FilmsActions from '../../redux/films/filmsActions';
import * as FilmsSelectors from '../../redux/films/filmsSelectors';
// import { toastShow } from '../../helpers/hellpers';
import * as ModalActions from '../../redux/modal/modalActions';
// import { DeleteFilmbyId } from '../../Api/query';

const mapStateToProps = state => ({
  films: FilmsSelectors.getCurrentFilms(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(ModalActions.open());
    dispatch(ModalActions.openDelete());
    return dispatch(ModalActions.addId(id));
  },
  onMore: id => {
    dispatch(ModalActions.open());
    dispatch(ModalActions.openInfo());
    return dispatch(ModalActions.addId(id));
  },
  fetchAllFilms: allFilms => dispatch(FilmsActions.fetchFilms(allFilms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFilms);

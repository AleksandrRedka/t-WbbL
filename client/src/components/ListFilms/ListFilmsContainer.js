import { connect } from 'react-redux';
import ListFilms from './ListFilms';
import * as FilmsActions from '../../redux/films/filmsActions';
import * as FilmsSelectors from '../../redux/films/filmsSelectors';
import { toastShow } from '../../helpers/hellpers';
import * as ModalActions from '../../redux/modal/modalActions';
import { DeleteFilmbyId } from '../../Api/query';

const mapStateToProps = state => ({
  films: FilmsSelectors.getFilmsForShow(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: async id => {
    const response = await DeleteFilmbyId('api/film', { id });
    const status = response.data.status;
    if (status === 200) {
      toastShow('Film deleted ✅✅✅', 'success');
      return dispatch(FilmsActions.deleteFilm(id));
    }
  },
  onMore: id => {
    dispatch(ModalActions.open());
    return dispatch(ModalActions.addId(id));
  },
  fetchAllFilms: allFilms => dispatch(FilmsActions.fetchFilms(allFilms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFilms);

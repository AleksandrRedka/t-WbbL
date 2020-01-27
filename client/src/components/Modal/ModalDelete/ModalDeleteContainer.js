import { connect } from 'react-redux';
import ModalDelete from './ModalDelete';
import * as FilmsActions from '../../../redux/films/filmsActions';
import * as ModalSelectors from '../../../redux/modal/modalSelectors';
import * as ModalActions from '../../../redux/modal/modalActions';
import { toastShow } from '../../../helpers/hellpers';
import { DeleteFilmbyId } from '../../../Api/query';

const mapStateToProps = state => ({
  id: ModalSelectors.getModalId(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: async id => {
    console.log();
    const response = await DeleteFilmbyId('api/film', { id });
    const status = response.data.status;
    if (status === 200) {
      toastShow(`Film deleted ✅✅✅`, 'success');
      dispatch(ModalActions.close());
      dispatch(ModalActions.closeDelete());
      dispatch(ModalActions.deleteId());
      return dispatch(FilmsActions.deleteFilm(id));
    }
  },
  onCancel: () => {
    dispatch(ModalActions.close());
    dispatch(ModalActions.closeDelete());
    return dispatch(ModalActions.deleteId());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);

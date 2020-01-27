import { connect } from 'react-redux';
import Modal from './Modal';
import * as ModalActions from '../../redux/modal/modalActions';
import * as ModalSelectors from '../../redux/modal/modalSelectors';

const mapStateToProps = state => ({
  stateModalInfo: ModalSelectors.getContainerInfo(state),
  stateModalDelete: ModalSelectors.getContainerDelete(state),
});

const mapDispatchToProps = dispatch => ({
  closeModal: e => {
    if (e.target.id === 'wrapperModal') {
      dispatch(ModalActions.close());
      dispatch(ModalActions.closeInfo());

      return dispatch(ModalActions.deleteId());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

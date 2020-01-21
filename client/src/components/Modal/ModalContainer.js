import { connect } from 'react-redux';
import Modal from './Modal';
import * as ModalSelector from '../../redux/modal/modalSelectors';
import * as ModalActions from '../../redux/modal/modalActions';

const mapStateToProps = state => ({
  item: ModalSelector.getModalItem(state),
});

const mapDispatchToProps = dispatch => ({
  closeModal: e => {
    if (e.target.id === 'wrapperModal') {
      dispatch(ModalActions.close());
      return dispatch(ModalActions.deleteId());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

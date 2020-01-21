import { combineReducers } from 'redux';
import { Type } from './modalActions';

const modalStateReduser = (state = false, { type, payload }) => {
  switch (type) {
    case Type.OPEN_MODAL:
      return payload;
    case Type.CLOSE_MODAL:
      return payload;
    default:
      return state;
  }
};

const idReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.ADD_ID:
      return payload;
    case Type.DELETE_ID:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  modalState: modalStateReduser,
  id: idReducer,
});

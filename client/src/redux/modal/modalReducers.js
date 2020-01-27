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

const containerInfoReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SHOW_INFO:
      return payload;
    case Type.HIDE_INFO:
      return payload;
    default:
      return state;
  }
};

const containerDeleteReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.SHOW_DELETE:
      return payload;
    case Type.HIDE_DELETE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  modalState: modalStateReduser,
  containerInfo: containerInfoReducer,
  containerDelete: containerDeleteReducer,
  id: idReducer,
});

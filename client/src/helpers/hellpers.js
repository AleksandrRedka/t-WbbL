import { toast } from 'react-toastify';
import { generate } from 'shortid';

export const mapper = data =>
  data.map(({ _id: id, ...props }) => ({ id, ...props }));

export const generateId = generate();

export const toastShow = (text, typeToast) => {
  toast[typeToast](`${text}`, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <Route>
        <App />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

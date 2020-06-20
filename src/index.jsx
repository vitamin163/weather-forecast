import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '../public/application.scss';
import App from './components/App.jsx';
import reducers from './slices';
import '../public/favicon.ico';

const store = configureStore({
  reducer: reducers,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

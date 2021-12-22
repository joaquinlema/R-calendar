import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CalendarApp } from './CalendarApp';
import { store } from './store';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalendarApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
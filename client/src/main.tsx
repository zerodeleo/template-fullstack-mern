import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import AuthContextProvider from './lib/context/AuthContext';
import ErrorContextProvider from './lib/context/ErrorContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <ErrorContextProvider>
          <Router />
        </ErrorContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

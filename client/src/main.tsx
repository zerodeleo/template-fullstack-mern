import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
import AuthContextProvider from './lib/context/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

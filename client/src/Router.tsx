import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Users from './pages/users/Users';
import User from './pages/users/[username]';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

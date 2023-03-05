import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import App from './App';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { selectAuth } from './lib/redux/selectors';
import Users from './pages/users/Users';
import User from './pages/users/[username]';
import Home from './pages/[id]';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { FC, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import NotFound from './components/error/NotFound';
import { ErrorContext } from './lib/context/ErrorContext';
import Home from './pages/[id]';
import { styles } from './styles';

const Router: FC = () => {
  const { setError } = useContext(ErrorContext);
  return (
    <main className={`${styles.bg} ${styles.gridCenterScreen}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Router;

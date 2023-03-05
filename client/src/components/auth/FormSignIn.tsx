import { FC, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { ErrorContext } from '../../lib/context/ErrorContext';
import { selectAuth } from '../../lib/redux/selectors';
import { styles } from '../../styles';
import { Button } from '../layout/Button';
import AuthInput from './AuthInput';

export const FormSignIn: FC = () => {
  const { setError } = useContext(ErrorContext);
  const { signIn } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (/username/.test(name) && !/[A-Za-z]$/.test(value) && value !== '') {
      return setError(`Character ${value.charAt(value.length - 1)} not allowed in a username`);
    }
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(credentials);
  };

  return (
    <form className={`${styles.authForm}`} onSubmit={handleSubmit}>
      <AuthInput handleChange={handleChange} credentials={credentials} type="text" name="username" label="Username" />
      <AuthInput handleChange={handleChange} credentials={credentials} type="password" name="password" label="Password" />
      <Button className={`${styles.authBtn}`} txt="sign in" type="submit" />
      <Button className={`${styles.authNavBtn}`} onClick={() => navigate('/signup')} txt="Don't have an account yet?" type="button" />
    </form>
  );
};

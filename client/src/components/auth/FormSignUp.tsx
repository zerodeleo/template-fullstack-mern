import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { ErrorContext } from '../../lib/context/ErrorContext';
import { styles } from '../../styles';
import { Button } from '../layout/Button';
import AuthInput from './AuthInput';

export const FormSignUp: FC = () => {
  const { setError } = useContext(ErrorContext);
  const { signUp } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '', passwordRepeat: '' });
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
    if (credentials.password !== credentials.passwordRepeat) {
      return setError('Wrong credentials');
    }
    signUp(credentials);
  };

  return (
    <form className={`${styles.authForm}`} onSubmit={handleSubmit}>
      <AuthInput handleChange={handleChange} credentials={credentials} type="text" name="username" label="Username" />
      <AuthInput handleChange={handleChange} credentials={credentials} type="password" name="password" label="Password" />
      <AuthInput handleChange={handleChange} credentials={credentials} type="password" name="passwordRepeat" label="Repeat password" />
      <Button className={`${styles.authBtn}`} onSubmit={handleSubmit} txt="sign up" type="submit" />
      <Button className={`${styles.authNavBtn}`} onClick={() => navigate('/signin')} txt="Already have an account?" type="button" />
    </form>
  );
};

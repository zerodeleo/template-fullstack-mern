import { FC, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { selectUser } from '../../lib/redux/selectors';
import { styles } from '../../styles';
import { Button } from '../layout/Button';
import AuthInput from './AuthInput';

export const FormSignUp: FC = () => {
  const { signUp } = useContext(AuthContext);
  const { _id } = useSelector(selectUser);
  const [credentials, setCredentials] = useState({ username: '', password: '', passwordRepeat: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    credentials.password === credentials.passwordRepeat && signUp(credentials);
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

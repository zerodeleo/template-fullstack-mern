import { FC, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { ErrorContext } from '../../lib/context/ErrorContext';
import { selectAuth } from '../../lib/redux/selectors';
import { styles } from '../../styles';
import Error from '../error/error';
import Authenticate from './Authenticate';
import { FormSignIn } from './FormSignIn';
import { FormSignUp } from './FormSignUp';

export const SignIn: FC = () => {
  return (
    <section className={`${styles.authFormContainer}`}>
      <Authenticate />
      <FormSignIn />
      <Error />
    </section>
  );
};

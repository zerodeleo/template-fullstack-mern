import { FC, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../lib/context/AuthContext';
import { selectAuth } from '../../lib/redux/selectors';
import { styles } from '../../styles';
import Authenticate from './Authenticate';
import { FormSignIn } from './FormSignIn';
import { FormSignUp } from './FormSignUp';

export const SignIn: FC = () => {

  return (
    <section className={`${styles.authFormContainer}`}>
      <Authenticate/>
      <FormSignIn />
    </section>
  );
};

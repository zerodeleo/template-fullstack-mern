import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../../lib/redux/selectors';
import { styles } from '../../styles';
import Authenticate from './Authenticate';
import { FormSignUp } from './FormSignUp';
interface ISignUpProps {}

export const SignUp: FC<ISignUpProps> = (props) => {
  return (
    <section className={`${styles.authFormContainer}`}>
      <Authenticate />
      <FormSignUp />
    </section>
  );
};

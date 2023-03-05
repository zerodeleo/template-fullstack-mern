import { FC } from 'react';
import { styles } from '../../styles';
import Err from '../error/Err';
import Authenticate from './Authenticate';
import { FormSignIn } from './FormSignIn';

export const SignIn: FC = () => {
  return (
    <section className={`${styles.authFormContainer}`}>
      <Authenticate />
      <FormSignIn />
      <Err />
    </section>
  );
};

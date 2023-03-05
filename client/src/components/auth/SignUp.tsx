import { FC } from 'react';
import { styles } from '../../styles';
import Err from '../error/Err';
import Authenticate from './Authenticate';
import { FormSignUp } from './FormSignUp';
interface ISignUpProps {}

export const SignUp: FC<ISignUpProps> = (props) => {
  return (
    <section className={`${styles.authFormContainer}`}>
      <Authenticate />
      <FormSignUp />
      <Err />
    </section>
  );
};

import { FC, useContext } from 'react';
import { ErrorContext } from '../../lib/context/ErrorContext';
import { styles } from '../../styles';

const NotFound: FC = () => {
  const { message } = useContext(ErrorContext);
  return (
    <>
      <section className={``}>
        <h1>The page you requested doesn't exist 🤪</h1>
      </section>
    </>
  );
};

export default NotFound;

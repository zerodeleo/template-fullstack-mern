import { FC, useContext } from 'react';
import { ErrorContext } from '../../lib/context/ErrorContext';
import { styles } from '../../styles';

const Err: FC = () => {
  const { message } = useContext(ErrorContext);
  return (
    <>
      {message && (
        <section className={`${styles.error} transition-all ease-in-out duration-300`}>
          <div className="flex flex-col justify-center h-full">
            <p className="font-patrick-hand">This is a message from the developer...</p>
            <br />
            <p>{message}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Err;

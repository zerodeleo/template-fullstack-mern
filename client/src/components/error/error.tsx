import React, { FC } from 'react';
import { styles } from '../../styles';

interface IErrorProps {
  msg: string;
  className: string;
}

const Error: FC<IErrorProps> = ({ msg, className }) => (
  <section className={`${styles.error} ${className}`}>
    <div className="flex flex-col justify-center h-full">
      <p className="font-patrick-hand">This is a message from the developer...</p>
      <p>{msg}</p>
    </div>
  </section>
);

export default Error;

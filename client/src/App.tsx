import React, { useState, FC } from 'react';

// Styles
import * as styles from './styles';

// Services
import { ping } from './service';

const App = () => {
  const [res, setRes] = useState('');

  const handleClick = async () => {
    const response = await ping();
    setRes(response.data);
  };

  return (
    <section className={`${styles.center}`}>
      <article>
        <button className={`${styles.button}`} type="button" onClick={handleClick}>
          Ping
        </button>
      </article>
      <br />
      <article>
        <p className="text-xl">{res}</p>
      </article>
    </section>
  );
};

export default App;

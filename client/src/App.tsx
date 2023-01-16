import { useState } from 'react';

// Styles
import * as styles from './styles';

// Services
import { get } from './service';

function App() {
  const [res, setRes] = useState('');

  const handleClick = async() => {
    const response = await get();
    response && setRes(response.data);
  }

  return (
    <section className={`${styles.center}`}>
      <article>
        <button className={`${styles.button}`}
          type="button"
          onClick={handleClick}>
            Click here to request data from Server
        </button>
      </article>
      <br/>
      <article>
        {res && <p className="text-xl">You successfully got a response:<br/>{res}</p>}
      </article>
    </section>
  )
}

export default App

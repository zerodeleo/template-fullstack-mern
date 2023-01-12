import { useState } from 'react';
import axios from 'axios';

// Styles
import * as styles from './styles';

function App() {
  const [res, setRes] = useState('');

  const handleClick = async() => {
    const response = await axios.get('http://localhost:8080/');
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

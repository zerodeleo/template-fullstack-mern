import { FC, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Authenticate from '../components/auth/Authenticate';
import { Button } from '../components/layout/Button';
import { AuthContext } from '../lib/context/AuthContext';
import { selectAuth, selectUser } from '../lib/redux/selectors';
import { styles } from '../styles';

const Home: FC = () => {
  const { getUser, signOut } = useContext(AuthContext);
  const { username } = useSelector(selectUser);
  const id = useParams().id;
  const { _id } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    id && getUser(id);
  }, []);

  return (
    <section className={`${styles.center}`}>
      <Authenticate />
      Hello {username}!
      <Button onClick={signOut} txt="Sign Out..." />
    </section>
  );
};

export default Home;

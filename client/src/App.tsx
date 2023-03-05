import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Authenticate from './components/auth/Authenticate';
import { selectAuth } from './lib/redux/selectors';
interface IAppProps {}

const App: FC<IAppProps> = (props) => {
  const { _id } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const ls_id = localStorage.getItem('_id');
    if (ls_id) navigate(`/${ls_id}`);
  }, []);

  useEffect(() => {
    if (!_id) navigate('/signin');
    if (_id) navigate(`/${_id}`);
  }, [_id]);

  return (
    <>
      <Authenticate />
    </>
  );
};

export default App;

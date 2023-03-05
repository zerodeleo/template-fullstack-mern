import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../../lib/redux/selectors';

const Authenticate: FC = () => {
  const { _id } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const ls_id = localStorage.getItem('_id');
    if (ls_id) navigate(`/${ls_id}`);
    if (_id) navigate(`/${_id}`);
    if (!_id && !ls_id && window.location.pathname !== '/signup') navigate('/signin');
  }, [_id]);

  return <></>;
};

export default Authenticate;

import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAuth, selectUser } from '../../lib/redux/selectors';

const Authenticate: FC = () => {
  const { _id } = useSelector(selectAuth);
  const navigate = useNavigate();

  console.log(window.location.pathname);

  useEffect(() => {
    const ls_id = localStorage.getItem('_id');
    if (ls_id) navigate(`/${ls_id}`);
    if (_id) navigate(`/${_id}`);
    if (!_id && !ls_id && window.location.pathname !== '/signup') navigate('/signin');
  }, [_id]);

  return <></>;
};

export default Authenticate;

import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readUser } from '../../service';

interface IUserProps {}

const User: FC<IUserProps> = (props) => {
  const username = useParams().username as string;

  useEffect(() => {
    readUser(username)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return <article>{username}</article>;
};

export default User;

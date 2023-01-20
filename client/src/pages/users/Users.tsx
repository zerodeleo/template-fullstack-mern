import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';
import { selectUsers } from '../../lib/redux/selectors';
import { deleteUser, readAllUsers } from '../../lib/redux/actions';

// Styles
import * as styles from '../../styles';

interface IUserProps {}

const Users: FC<IUserProps> = (props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [currUsers, setCurrUsers] = useState(users);

  useEffect(() => {
    dispatch(readAllUsers());
  }, []);

  useEffect(() => {
    setCurrUsers(users);
  }, [users]);

  return (
    <section className={`${styles.center}`}>
      {currUsers.map((user, i) => (
        <article key={`/users/${user._id}`}>
          <p>User {i + 1}</p>
          <h1>_id: {user._id}</h1>
          <h1>username: {user.username}</h1>
          <button
            className={`${styles.button}`}
            onClick={() => {
              setCurrUsers(currUsers.filter((u) => u._id !== user._id));
              dispatch(deleteUser(user._id));
            }}
          >
            Delete User
          </button>
        </article>
      ))}
    </section>
  );
};

export default Users;

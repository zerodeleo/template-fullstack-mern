import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';
import { selectUser } from '../../lib/redux/selectors';
import { readUser, createUser } from '../../lib/redux/actions';

// Styles
import * as styles from '../../styles';

interface IUserProps {}

const User: FC<IUserProps> = (props) => {
  const username = useParams().username as string;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(readUser(username));
  }, []);

  return (
    <section className={`${styles.center}`}>
      <article>
        <p>{!user.message && user.username}</p>
        <p>{user.message && user.message}</p>
      </article>
      <article>
        {user.message && (
          <button
            className={`${styles.button}`}
            onClick={() => {
              dispatch(createUser({ username, password: 'test' }));
              location.reload();
            }}
          >
            Create User "{username}"
          </button>
        )}
      </article>
    </section>
  );
};

export default User;

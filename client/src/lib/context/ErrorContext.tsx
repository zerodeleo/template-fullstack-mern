import React, { createContext, FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectAuth, selectUser } from '../redux/selectors';

type AppContextProviderProps = {
  children: React.ReactNode;
};

interface IErrorContext {
  message: string;
  setError: Dispatch<SetStateAction<string>>;
}

const ErrorContext = createContext<IErrorContext>({ message: '', setError: () => {} });

const ErrorContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const { message: authError } = useAppSelector(selectAuth);
  const { message: userError } = useAppSelector(selectUser);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(message);

  useEffect(() => {
    authError && setMessage(authError);
    userError && setMessage(userError);
    error && setMessage(error);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }, [authError, userError, error]);
  return <ErrorContext.Provider value={{ message, setError }}>{children}</ErrorContext.Provider>;
};

export { ErrorContext };
export default ErrorContextProvider;

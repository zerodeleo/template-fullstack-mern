import { FC, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInputProps> = (props) => {
  return (
    <>
      <input {...props} />
    </>
  );
};

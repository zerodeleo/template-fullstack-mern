import { ButtonHTMLAttributes, FC } from 'react';

interface  IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    txt: string;
}

export const Button: FC<IButtonProps> = (props) => {
  return <button {...props}>{props.txt}</button>;
};

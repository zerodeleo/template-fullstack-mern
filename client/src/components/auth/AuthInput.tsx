import React, { ChangeEvent, FC } from 'react';
import { ICredentials } from '../../lib/context/AuthContext';
import { styles } from '../../styles';

// Components
import { Input } from '../layout/Input';

// Styles

interface IAuthInputProps {
  credentials: ICredentials;
  handleChange: (e: ChangeEvent) => void;
  name: string;
  type: string;
  label: string;
}

const AuthInput: FC<IAuthInputProps> = ({ credentials, handleChange, name, type, label }) => {
  return (
    <div className="py-5">
      <div className="relative group">
        {!credentials[name as keyof ICredentials] && <label className={`${styles.authInputLabel}`}>{label}</label>}
        {credentials[name as keyof ICredentials] && <label className={`${styles.authInputLabelSmall}`}>{label}</label>}
        <Input required className={`${styles.authInput}`} onChange={handleChange} type={type} name={name} value={credentials[name as keyof ICredentials]} />
      </div>
    </div>
  );
};

export default AuthInput;

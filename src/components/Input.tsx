import React, { FC } from 'react';
import { InputProps } from 'utils/types';

const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;

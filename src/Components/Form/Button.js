import React from 'react';
import { BTN } from './Styles';
const Button = ({ children, ...rest }) => {
  return <BTN {...rest}>{children}</BTN>;
};
export default Button;

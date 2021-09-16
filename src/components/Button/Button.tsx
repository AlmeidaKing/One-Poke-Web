import React from 'react';

// styles:
import ButtonStyles from './Button.styles.';

interface Props {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ children, type = 'button' }: Props) => {
  return <ButtonStyles type={type}>{children}</ButtonStyles>;
};

export default Button;

import React, { useState } from 'react';

// styles:
import { Wrapper, InputStyles } from './Input.styles';

interface Props {
  value: string | number;
  name: string;
  callBackFunc?: (field: string, value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  label?: string;
  type?: string;
}

const Input: React.FC<Props> = ({
  value,
  placeholder,
  callBackFunc = () => '',
  name,
  autoComplete = 'off',
  label,
  type = 'text',
}: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (value: string) => {
    callBackFunc(name, value);
    setInputValue(value);
  };

  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <InputStyles
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        autoComplete={autoComplete}
        type={type}
      />
    </Wrapper>
  );
};

export default Input;

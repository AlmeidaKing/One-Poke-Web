import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

// utils:
import { setCookie } from 'utils';

// styles
import Wrapper from './Form.styles';

// components:
import { Input, Button } from 'components';

interface FormData {
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const { push } = useHistory();

  const handleChangeInputText = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submitted');
    setCookie('logged', 'true');
    setTimeout(() => {
      push('/dashboard');
    }, 500);
  };

  return (
    <Wrapper method="POST" onSubmit={handleSubmit}>
      <div className="inputs-container">
        <Input
          name="email"
          value={formData.email}
          placeholder="email@email.com"
          callBackFunc={handleChangeInputText}
          label="E-mail:"
        />

        <Input
          name="password"
          type="password"
          value={formData.password}
          placeholder="******"
          callBackFunc={handleChangeInputText}
          label="Senha:"
        />
      </div>
      <Button type="submit">Entrar</Button>
    </Wrapper>
  );
};

export default Form;

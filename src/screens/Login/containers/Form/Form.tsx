import React, { useState } from 'react';

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

  const handleChangeInputText = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  console.log(formData);
  return (
    <Wrapper>
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

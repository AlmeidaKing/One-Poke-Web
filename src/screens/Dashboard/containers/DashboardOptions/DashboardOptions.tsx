import React, { useState, useEffect } from 'react';

// styles:
import Wrapper from './DashboardOptions.styles';

interface Options {
  [key: string]: string;
}

const DashboardOptions = () => {
  const [options, setOptions] = useState<Options[]>([]);

  useEffect(() => {
    setOptions([
      { label: 'Lista de Pokemons' },
      { label: 'Meus Pokemons' },
      { label: 'Localizações' },
      { label: 'Perfil' },
    ]);
  }, []);

  return (
    <Wrapper>
      <ul className="options-list">
        {options.map((option, index) => (
          <li className="options-list__item" key={`option-${index + 1}`}>
            {option.label}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default DashboardOptions;

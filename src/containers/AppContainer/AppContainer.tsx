import React from 'react';

// styles:
import Wrapper from './AppContainer.styles';

// components:
import { Navbar } from 'components';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default AppContainer;

import React from 'react';

// styles:
import Wrapper from './AppContainer.styles';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppContainer;

import React from 'react';
import { useLocation } from 'react-router-dom';

// styles:
import Wrapper from './Navbar.styles.';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname.includes('/login')) return null;

  return <Wrapper></Wrapper>;
};

export default Navbar;

import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
  z-index: 1;
`;

export default Wrapper;

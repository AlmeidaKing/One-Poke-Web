import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    height: 100%;
    max-width: ${({ theme }) => theme.breakpoints.maxSize};
    margin-top: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.box.boxShadow};
    border-radius: ${({ theme }) => theme.borders.borderRadius.sm};
  }
`;

export default Wrapper;

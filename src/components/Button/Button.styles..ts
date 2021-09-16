import styled from 'styled-components';

const ButtonStyles = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.borderRadius.xs};
  width: 100%;
  height: 40px;
`;

export default ButtonStyles;

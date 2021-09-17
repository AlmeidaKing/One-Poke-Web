import styled from 'styled-components';

const ButtonStyles = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.borderRadius.xs};
  width: 100%;
  height: 40px;
  cursor: pointer;

  transition: all 300ms ease;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.highlightMedium}`};
  }

  &:active {
    background-color: ${({ theme }) => `${theme.colors.primaryLight}` + 90};
  }
`;

export default ButtonStyles;

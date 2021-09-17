import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 8px 0 0 4px;
    font-size: 14px;
  }
`;

export const InputStyles = styled.input`
  height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.highlightMedium};
  outline: none;
  padding: 4px;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.textColor}` + 70};
  }
`;

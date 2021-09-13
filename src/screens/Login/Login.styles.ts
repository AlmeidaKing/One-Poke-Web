import styled from 'styled-components';
import { ThemeBody } from 'themes/protocols';

interface Props {
  theme: ThemeBody;
}

const Wrapper = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.light};

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 16px 80px;
    border-radius: ${({ theme }) => theme.borders.borderRadius.md};

    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
  }

  .pokemon-image {
    width: 200px;
  }
`;

export default Wrapper;

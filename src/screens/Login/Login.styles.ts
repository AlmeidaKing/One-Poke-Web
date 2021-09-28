import styled from 'styled-components';
import { ThemeBody } from 'themes/protocols';

interface Props {
  theme: ThemeBody;
}

const Wrapper = styled.main<Props>`
  width: 100vw;
  height: 100vh;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.light};

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 400px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    border-radius: ${({ theme }) => theme.borders.borderRadius.md};

    box-shadow: ${({ theme }) => theme.box.boxShadow};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      box-shadow: none;
      margin: 16px;
    }
  }

  .pokemon-image {
    width: 130px;
  }
`;

export default Wrapper;

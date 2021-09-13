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
`;

export default Wrapper;

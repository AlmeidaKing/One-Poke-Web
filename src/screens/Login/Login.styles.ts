import styled from 'styled-components';
import { ThemeBody } from 'themes/protocols';

interface Props {
  theme: ThemeBody;
}

const Wrapper = styled.div<Props>`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
`;

export default Wrapper;

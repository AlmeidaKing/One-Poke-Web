import styled from 'styled-components';
import colors from 'themes/colors';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${colors.white};
`;

export default Wrapper;

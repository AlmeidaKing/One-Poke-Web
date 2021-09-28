import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;

  .options-list {
    margin: 16px;

    &__item {
      position: relative;
      transition: all 300ms ease;
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.textColor};
      border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
      padding: 0 8px;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.primaryLight};
        transform-origin: bottom right;
        transition: all 300ms ease-out;
        transform: scaleX(0);
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

export default Wrapper;

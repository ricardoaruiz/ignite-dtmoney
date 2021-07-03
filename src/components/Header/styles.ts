import styled, { css } from 'styled-components';

import { Container } from 'components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    height: 21rem;
    padding-top: 3.2rem;

    ${Container} {
      display: flex;
      justify-content: space-between;
    }

    button {
      ${({ theme }) => css`
        font-size: 1.6rem;
        background-color: ${theme.colors.blueLight};
        color: ${theme.colors.shape};
        padding: 1.2rem 3.2rem;
        border: 0;
        border-radius: 0.4rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      `};
    }
  `};
`;

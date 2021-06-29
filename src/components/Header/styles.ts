import styled from 'styled-components';

import { Container } from 'components';

export const Header = styled.header`
  background-color: var(--blue);
  height: 21rem;
  padding-top: 3.2rem;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1.6rem;
    background-color: var(--blue-light);
    color: var(--shape);
    padding: 1.2rem 3.2rem;
    border: 0;
    border-radius: 0.4rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

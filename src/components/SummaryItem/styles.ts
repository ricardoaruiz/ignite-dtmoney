import styled, { css } from 'styled-components';

type WrapperProps = {
  isTotal: boolean;
  isPositive: boolean;
};

const wrapperModifiers = {
  positive: () => css`
    background-color: var(--green);
    color: var(--shape);
  `,
  negative: () => css`
    background-color: var(--red);
    color: var(--shape);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isTotal, isPositive }) => css`
    width: 35rem;
    padding: 3rem;
    background-color: var(--shape);
    border-radius: 0.5rem;
    color: var(--text-tile);

    ${isTotal && isPositive && wrapperModifiers.positive()}
    ${isTotal && !isPositive && wrapperModifiers.negative()}
  `};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const Total = styled.p`
  font-size: 3.6rem;
  line-height: 5.4rem;
`;

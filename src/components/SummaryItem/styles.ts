import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  isTotal: boolean;
  isPositive: boolean;
};

const wrapperModifiers = {
  positive: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.shape};
  `,
  negative: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.shape};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isTotal, isPositive }) => css`
    width: 35rem;
    padding: 3rem;
    background-color: ${theme.colors.shape};
    border-radius: 0.5rem;
    color: ${theme.colors.textTitle};

    ${isTotal && isPositive && wrapperModifiers.positive(theme)}
    ${isTotal && !isPositive && wrapperModifiers.negative(theme)}
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

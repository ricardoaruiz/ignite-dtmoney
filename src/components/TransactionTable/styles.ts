import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.div``;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;

export const Header = styled.thead``;

export const HeaderRow = styled.tr`
  background-color: transparent;
`;

export const HeaderCell = styled.th`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.textBody};
    text-align: left;
    padding: 2rem 0 2rem 0.5em;

    &:first-of-type {
      padding-left: 1.5rem;
    }
    &:last-of-type {
      padding-right: 0.5rem;
    }
  `};
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  `};
`;

type DataProps = {
  isBold?: boolean;
  isPositive?: boolean;
  isNegative?: boolean;
};

const dataModifier = {
  bold: (theme: DefaultTheme) => css`
    color: ${theme.colors.textTitle};
  `,
  positive: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  negative: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
};

export const Data = styled.td<DataProps>`
  ${({ theme, isBold, isPositive, isNegative }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.textBody};
    text-align: left;
    padding: 2rem 0 2rem 0.5em;

    ${isBold && dataModifier.bold(theme)};
    ${isPositive && dataModifier.positive(theme)};
    ${isNegative && dataModifier.negative(theme)};

    &:first-of-type {
      padding-left: 1.5rem;
      border-radius: 0.5rem 0 0 0.5rem;
    }
    &:last-of-type {
      padding-right: 0.5rem;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  `};
`;

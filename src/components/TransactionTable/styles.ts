import styled, { css } from 'styled-components';

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
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--text-body);
  text-align: left;
  padding: 2rem 0 2rem 0.5em;

  &:first-of-type {
    padding-left: 1.5rem;
  }
  &:last-of-type {
    padding-right: 0.5rem;
  }
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
  background-color: var(--shape);
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

type DataProps = {
  isBold?: boolean;
  isPositive?: boolean;
  isNegative?: boolean;
};

const dataModifier = {
  bold: () => css`
    color: var(--text-title);
  `,
  positive: () => css`
    color: var(--green);
  `,
  negative: () => css`
    color: var(--red);
  `,
};

export const Data = styled.td<DataProps>`
  ${({ isBold, isPositive, isNegative }) => css`
    font-size: 1.6rem;
    color: var(--text-body);
    text-align: left;
    padding: 2rem 0 2rem 0.5em;

    ${isBold && dataModifier.bold()};
    ${isPositive && dataModifier.positive()};
    ${isNegative && dataModifier.negative()};

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

import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '57.6rem',
    padding: '4.8rem',
  },
  overlay: {
    background: 'rgba(0,0,0, 0.5)',
  },
};

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: grid;
  gap: 1.6rem;
  margin-top: 3.2rem;
`;

export const Input = styled.input`
  padding: 2rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  background: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: var(--text-body);
  }
`;

export const TransactionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 6.4rem;
  background-color: var(--shape);
  border: 1.5px solid var(--input-background);
  border-radius: 5px;
  font-size: 1.6rem;
  transition: filter 0.3s;
`;

type TransactionButtonProps = {
  transaction: Transactions;
  isActive?: boolean;
};

export type Transactions = 'income' | 'outcome';

const typeButtonSelectedColors = {
  outcome: transparentize(0.9, '#e52e4d'),
  income: transparentize(0.9, '#33CC95'),
};

const typeButtonModifiers = {
  checked: (transaction: Transactions) => css`
    background-color: ${typeButtonSelectedColors[transaction]};
    border: 1.5px solid ${typeButtonSelectedColors[transaction]};
  `,
};

export const TransactionButton = styled(Button)<TransactionButtonProps>`
  ${({ isActive, transaction }) => css`
    transition: all 0.2s;
    & img {
      margin-right: 1.6rem;
      width: 2.4rem;
      height: 2.4rem;
    }

    &:hover {
      border: 1.5px solid ${darken(0.1, '#e7e9ee')};
    }

    ${isActive && typeButtonModifiers.checked(transaction)};
  `};
`;

export const SubmitButton = styled(Button)`
  font-weight: 600;
  background-color: var(--green);
  border: 1.5px solid var(--green);
  color: var(--shape);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: filter 0.3s;

  & img {
    width: 1.4rem;
    height: 1.4rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

/* eslint-disable no-irregular-whitespace */
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test';
import { TransactionTable } from '.';
import { transactionsMock } from './mock';

describe('<TransactionTable />', () => {
  it('should be render correctly', () => {
    renderWithTheme(<TransactionTable transactions={transactionsMock} />);

    expect(
      screen.getByRole('columnheader', {
        name: /título/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', {
        name: /preço/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', {
        name: /categoria/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', {
        name: /data/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('should be render formatted currency column', () => {
    renderWithTheme(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /r\$ 1\.200,00/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render formatted date column', () => {
    renderWithTheme(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /01\/07\/2021/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render positive currency colum', () => {
    renderWithTheme(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /r\$ 1\.200,00/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render negative currency colum', () => {
    renderWithTheme(<TransactionTable transactions={[transactionsMock[2]]} />);
    expect(
      screen.getByRole('cell', {
        name: /-r\$ 280,23/i,
      }),
    ).toBeInTheDocument();
  });
});

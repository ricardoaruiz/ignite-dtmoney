/* eslint-disable no-irregular-whitespace */
import { render, screen } from '@testing-library/react';
import { TransactionTable } from '.';
import { transactionsMock } from './mock';

describe('<TransactionTable />', () => {
  it('should be render correctly', () => {
    render(<TransactionTable transactions={transactionsMock} />);

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
    render(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /r\$ 1\.200,00/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render formatted date column', () => {
    render(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /01\/07\/2021/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render positive currency colum', () => {
    render(<TransactionTable transactions={[transactionsMock[0]]} />);
    expect(
      screen.getByRole('cell', {
        name: /r\$ 1\.200,00/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be render negative currency colum', () => {
    render(<TransactionTable transactions={[transactionsMock[2]]} />);
    expect(
      screen.getByRole('cell', {
        name: /-r\$ 280,23/i,
      }),
    ).toBeInTheDocument();
  });
});

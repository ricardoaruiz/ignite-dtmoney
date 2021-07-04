/* eslint-disable no-irregular-whitespace */
import { screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { renderWithTheme } from 'utils/test';
import { api } from 'services/api';
import { DtMoneyContextProvider } from 'contexts/DtMoneyContext';

import { TransactionTable } from '.';
import { transactionsMock } from './mock';

const mockedApi = new MockAdapter(api);

describe('<TransactionTable />', () => {
  beforeEach(() => {
    mockedApi.reset();
  });

  it('should be render correctly', async () => {
    mockedApi
      .onGet('transactions')
      .reply(200, { transactions: transactionsMock });

    renderWithTheme(
      <DtMoneyContextProvider>
        <TransactionTable />
      </DtMoneyContextProvider>,
    );

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

    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(4);
    });
  });

  it('should be render formatted currency column', async () => {
    mockedApi
      .onGet('transactions')
      .reply(200, { transactions: [transactionsMock[0]] });

    renderWithTheme(
      <DtMoneyContextProvider>
        <TransactionTable />
      </DtMoneyContextProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('cell', {
          name: /r\$ 1\.200,00/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be render formatted date column', async () => {
    mockedApi
      .onGet('transactions')
      .reply(200, { transactions: [transactionsMock[0]] });

    renderWithTheme(
      <DtMoneyContextProvider>
        <TransactionTable />
      </DtMoneyContextProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('cell', {
          name: /01\/07\/2021/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be render positive currency colum', async () => {
    mockedApi
      .onGet('transactions')
      .reply(200, { transactions: [transactionsMock[0]] });

    renderWithTheme(
      <DtMoneyContextProvider>
        <TransactionTable />
      </DtMoneyContextProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('cell', {
          name: /r\$ 1\.200,00/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it('should be render negative currency colum', async () => {
    mockedApi
      .onGet('transactions')
      .reply(200, { transactions: [transactionsMock[2]] });

    renderWithTheme(
      <DtMoneyContextProvider>
        <TransactionTable />
      </DtMoneyContextProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('cell', {
          name: /-r\$ 280,23/i,
        }),
      ).toBeInTheDocument();
    });
  });
});

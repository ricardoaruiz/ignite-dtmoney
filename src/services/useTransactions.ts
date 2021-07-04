import React from 'react';

import { api } from './api';
import {
  Transaction,
  GetTransactionsResponse,
  CreateTransactionResponse,
} from 'types/api/transaction';

type UseTransactions = {
  getTransactions: () => Promise<Transaction[]>;
  createTransaction: (transaction: Transaction) => Promise<Transaction>;
};

const BASE_URI = '/transactions';

export const useTransactions = (): UseTransactions => {
  /**
   * Get all transactions
   */
  const getTransactions = React.useCallback(async (): Promise<
    Transaction[]
  > => {
    const { data } = await api.get<GetTransactionsResponse>(BASE_URI);

    return data.transactions;
  }, []);

  /**
   * Create new transaction
   */
  const createTransaction = React.useCallback(
    async (transaction: Transaction): Promise<Transaction> => {
      const { data } = await api.post<CreateTransactionResponse>(BASE_URI, {
        ...transaction,
        value:
          transaction.type === 'outcome'
            ? transaction.value * -1
            : transaction.value,
      });
      return data.transaction;
    },
    [],
  );

  return { getTransactions, createTransaction };
};

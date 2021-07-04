import React from 'react';

import { api } from './api';
import { Transaction, TransactionResponse } from 'types/api/transaction';

type UseTransactions = {
  getTransactions: () => Promise<Transaction[]>;
  createTransaction: (transaction: Transaction) => Promise<void>;
};

const BASE_URI = '/transactions';

export const useTransactions = (): UseTransactions => {
  /**
   * Get all transactions
   */
  const getTransactions = React.useCallback(async (): Promise<
    Transaction[]
  > => {
    const { data } = await api.get<TransactionResponse>(BASE_URI);
    return data.transactions;
  }, []);

  /**
   * Create new transaction
   */
  const createTransaction = React.useCallback(
    async (transaction: Transaction): Promise<void> => {
      return api.post(BASE_URI, transaction);
    },
    [],
  );

  return { getTransactions, createTransaction };
};

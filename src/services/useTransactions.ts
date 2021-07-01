import React from 'react';

import { api } from './api';
import { TransactionResponse } from 'types/api/transaction';

type UseTransactions = {
  getTransactions: () => Promise<TransactionResponse[]>;
};

const BASE_URI = '/transactions';

export const useTransactions = (): UseTransactions => {
  /**
   * Get all transactions
   */
  const getTransactions = React.useCallback(async (): Promise<
    TransactionResponse[]
  > => {
    const { data } = await api.get<TransactionResponse[]>(BASE_URI);
    return data;
  }, []);

  return { getTransactions };
};

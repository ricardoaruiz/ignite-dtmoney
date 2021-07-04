import React, { createContext } from 'react';

import { Transaction } from 'types/api/transaction';
import { useTransactions } from 'services/useTransactions';

type DtMoneyContextProviderType = {
  transactions: Transaction[];
  summary: SummaryType;
  addTransaction: (transaction: Transaction) => void;
};

type DtMoneyContextProviderProps = {
  children: React.ReactNode;
};

type SummaryType = {
  income: number;
  outcome: number;
  total: number;
};

export const DtMoneyContext = createContext({} as DtMoneyContextProviderType);

export const DtMoneyContextProvider = ({
  children,
}: DtMoneyContextProviderProps) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [summary, setSummary] = React.useState<SummaryType>({
    income: 0,
    outcome: 0,
    total: 0,
  });
  const { getTransactions, createTransaction } = useTransactions();

  /**
   * Calculate summary
   */
  const buildSummary = React.useCallback((transactions: Transaction[]) => {
    const finalSummary = transactions.reduce(
      (sum: SummaryType, trx: Transaction) => {
        switch (trx.type) {
          case 'income':
            return {
              ...sum,
              income: sum.income + trx.value,
              total: sum.total + trx.value,
            };
          case 'outcome':
            return {
              ...sum,
              outcome: sum.outcome + trx.value,
              total: sum.total + trx.value,
            };
          default:
            return sum;
        }
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      } as SummaryType,
    );

    setSummary(finalSummary);
  }, []);

  /**
   * Create new transaction
   */
  const addTransaction = React.useCallback(
    async (transaction: Transaction) => {
      const createdTrx = await createTransaction(transaction);
      setTransactions((state) => [...state, createdTrx]);
    },
    [createTransaction],
  );

  /**
   * Load transacton on load
   */
  React.useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await getTransactions();

        setTransactions(data);
      } catch (error) {
        console.error('Erro ao buscar as transações', error);
      }
    };
    loadTransactions();
  }, [getTransactions]);

  /**
   * Recalculate summary on change transactions
   */
  React.useEffect(() => {
    buildSummary(transactions);
  }, [buildSummary, transactions]);

  return (
    <DtMoneyContext.Provider value={{ transactions, summary, addTransaction }}>
      {children}
    </DtMoneyContext.Provider>
  );
};

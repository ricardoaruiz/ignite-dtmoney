export type Transaction = {
  id?: number;
  title: string;
  value: number;
  type: string;
  category: string;
  date: Date;
};

export type GetTransactionsResponse = Record<'transactions', Transaction[]>;
export type CreateTransactionResponse = Record<'transaction', Transaction>;

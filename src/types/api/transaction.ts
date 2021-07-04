export type Transaction = {
  id?: number;
  title: string;
  value: number;
  type: string;
  category: string;
  date: Date;
};

export type TransactionResponse = Record<'transactions', Transaction[]>;

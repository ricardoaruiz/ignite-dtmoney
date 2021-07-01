import React from 'react';
import { Container, Header, Summary, TransactionTable } from 'components';
import { Transaction } from 'components/TransactionTable';
import { useTransactions } from 'services/useTransactions';

import * as S from './styles';

export const Dashboard = () => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const { getTransactions } = useTransactions();

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
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <Container>
        <Summary income={17400} outcome={1259} total={16141} />
        <TransactionTable transactions={transactions} />
      </Container>
    </S.Wrapper>
  );
};

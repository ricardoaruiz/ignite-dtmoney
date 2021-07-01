import React from 'react';
import { Container, Header, Summary, TransactionTable } from 'components';
import { Transaction } from 'components/TransactionTable';

import * as S from './styles';

export const Dashboard = () => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
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

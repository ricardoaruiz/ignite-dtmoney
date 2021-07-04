import React from 'react';

import { Container, Summary, TransactionTable } from 'components';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Container>
        <Summary />
        <TransactionTable />
      </Container>
    </S.Wrapper>
  );
};

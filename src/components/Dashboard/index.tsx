import React from 'react';

import { Container, Header, Summary } from 'components';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Header />

      <Container>
        <Summary income={17400} outcome={1259} total={16141} />
      </Container>
    </S.Wrapper>
  );
};

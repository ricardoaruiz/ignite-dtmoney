import React from 'react';

import logo from 'assets/logo.svg';
import { Container } from 'components';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <img src={logo} alt='dt money' />
        <button type='button'>Nova transação</button>
      </Container>
    </S.Header>
  );
};

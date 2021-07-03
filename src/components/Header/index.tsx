import logo from 'assets/logo.svg';
import { Container } from 'components';

import * as S from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Header>
      <Container>
        <img src={logo} alt='dt money' />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Container>
    </S.Header>
  );
};

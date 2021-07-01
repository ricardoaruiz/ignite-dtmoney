import { Container, Header, Summary, TransactionTable } from 'components';
import { transactionsMock } from 'components/TransactionTable/mock';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Header />

      <Container>
        <Summary income={17400} outcome={1259} total={16141} />
        <TransactionTable transactions={transactionsMock} />
      </Container>
    </S.Wrapper>
  );
};

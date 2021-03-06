import { formatBRLDate, formatBrlCurrency } from 'utils';
import { useDtMoneyContext } from 'hooks';

import * as S from './styles';

export const TransactionTable = () => {
  const { transactions } = useDtMoneyContext();
  return (
    <S.Wrapper>
      <S.Table>
        <S.Header>
          <S.HeaderRow>
            <S.HeaderCell>Título</S.HeaderCell>
            <S.HeaderCell>Preço</S.HeaderCell>
            <S.HeaderCell>Categoria</S.HeaderCell>
            <S.HeaderCell>Data</S.HeaderCell>
          </S.HeaderRow>
        </S.Header>

        <S.Body>
          {!!transactions.length &&
            transactions.map(({ id, title, value, category, date }) => (
              <S.Row key={id}>
                <S.Data isBold>{title}</S.Data>
                <S.Data isPositive={value > 0} isNegative={value < 0}>
                  {formatBrlCurrency(value)}
                </S.Data>
                <S.Data>{category}</S.Data>
                <S.Data>{formatBRLDate(new Date(date))}</S.Data>
              </S.Row>
            ))}
        </S.Body>
      </S.Table>
    </S.Wrapper>
  );
};

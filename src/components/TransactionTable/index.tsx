import { formatBrlCurrency } from 'utils/numbers';
import * as S from './styles';

type TransactionTableProps = {
  transactions: Transaction[];
};

export type Transaction = {
  title: string;
  value: number;
  type: string;
  date: Date;
};

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
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
          {transactions.map(({ title, value, type, date }, index) => (
            <S.Row key={`${title}_${index}`}>
              <S.Data isBold>{title}</S.Data>
              <S.Data isPositive={value > 0} isNegative={value < 0}>
                {formatBrlCurrency(value)}
              </S.Data>
              <S.Data>{type}</S.Data>
              <S.Data>{Intl.DateTimeFormat('pt-BR').format(date)}</S.Data>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
    </S.Wrapper>
  );
};

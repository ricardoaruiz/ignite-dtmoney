import { formatBrlCurrency } from 'utils/numbers';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import totalImg from 'assets/total.svg';

import * as S from './styles';

type Types = 'income' | 'outcome' | 'total';

type SummaryProps = {
  type: Types;
  value: number;
};

type ItemDictionary = {
  title: string;
  image: string;
};

type Dictionary = Record<string, ItemDictionary>;

const dictionary: Dictionary = {
  income: {
    title: 'Entradas',
    image: incomeImg,
  },
  outcome: {
    title: 'Saídas',
    image: outcomeImg,
  },
  total: {
    title: 'Total',
    image: totalImg,
  },
};

export const SummaryItem = ({ type, value }: SummaryProps) => {
  const isTotal = type === 'total';
  const isPositive = value >= 0;

  return (
    <S.Wrapper isTotal={isTotal} isPositive={isPositive}>
      <S.Header>
        <S.Title>{dictionary[type].title}</S.Title>
        <S.Image src={dictionary[type].image} alt='entradas' />
      </S.Header>
      <S.Total>{formatBrlCurrency(value)}</S.Total>
    </S.Wrapper>
  );
};

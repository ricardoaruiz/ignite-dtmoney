import { SummaryItem } from 'components';

import * as S from './styles';

type SummaryProps = {
  income: number;
  outcome: number;
  total: number;
};

export const Summary = ({ income, outcome, total }: SummaryProps) => {
  return (
    <S.Wrapper>
      <SummaryItem type='income' value={income} />
      <SummaryItem type='outcome' value={outcome} />
      <SummaryItem type='total' value={total} />
    </S.Wrapper>
  );
};

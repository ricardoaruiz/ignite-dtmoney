import { SummaryItem } from 'components';

import { useDtMoneyContext } from 'hooks';

import * as S from './styles';

export const Summary = () => {
  const {
    summary: { income, outcome, total },
  } = useDtMoneyContext();

  return (
    <S.Wrapper>
      <SummaryItem type='income' value={income} />
      <SummaryItem type='outcome' value={outcome} />
      <SummaryItem type='total' value={total} />
    </S.Wrapper>
  );
};

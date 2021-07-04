/* eslint-disable react/display-name */
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test';
import { Summary } from 'components';
import { DtMoneyContextProvider } from 'contexts/DtMoneyContext';

jest.mock('components/NewTransactionModal', () => ({
  NewTransactionModal: () => <div></div>,
}));

jest.mock('components/SummaryItem', () => ({
  SummaryItem: () => (
    <div data-testid='mocked-summaryitem'>MockedSummaryItem</div>
  ),
}));

describe('<Summary />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <DtMoneyContextProvider>
        <Summary />
      </DtMoneyContextProvider>,
    );
    expect(screen.getAllByTestId('mocked-summaryitem')).toHaveLength(3);
  });
});

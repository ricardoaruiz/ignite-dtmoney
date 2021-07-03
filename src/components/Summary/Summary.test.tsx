/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import { Summary } from 'components';

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
    render(<Summary income={1000} outcome={500} total={500} />);
    expect(screen.getAllByTestId('mocked-summaryitem')).toHaveLength(3);
  });
});

import { screen } from '@testing-library/react';
import { theme } from 'styles/themes/theme';
import { renderWithTheme } from 'utils/test';
import { SummaryItem, SummaryProps } from './index';

const mock: Record<string, SummaryProps> = {
  income: {
    type: 'income',
    value: 1000,
  },
  outcome: {
    type: 'outcome',
    value: 500,
  },
  totalPositive: {
    type: 'total',
    value: 500,
  },
  totalNegative: {
    type: 'total',
    value: -500,
  },
};

describe('<Header />', () => {
  it('should be render income type', () => {
    renderWithTheme(<SummaryItem {...mock.income} />);

    expect(screen.getByText(/entradas/i)).toBeInTheDocument();
    expect(screen.getByAltText(/entradas/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 1.000,00')).toBeInTheDocument();
  });

  it('should be render outcome type', () => {
    renderWithTheme(<SummaryItem {...mock.outcome} />);

    expect(screen.getByText(/saídas/i)).toBeInTheDocument();
    expect(screen.getByAltText(/saídas/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 500,00')).toBeInTheDocument();
  });

  it('should be render positive total type', () => {
    renderWithTheme(<SummaryItem {...mock.totalPositive} />);

    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByAltText(/total/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 500,00').parentElement).toHaveStyle({
      'background-color': theme.colors.green,
      color: theme.colors.shape,
    });
  });

  it('should be render negative total type', () => {
    renderWithTheme(<SummaryItem {...mock.totalNegative} />);

    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByAltText(/total/i)).toBeInTheDocument();
    expect(screen.getByText('-R$ 500,00').parentElement).toHaveStyle({
      'background-color': theme.colors.red,
      color: theme.colors.shape,
    });
  });
});

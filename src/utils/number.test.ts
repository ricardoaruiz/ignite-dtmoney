import { formatBrlCurrency } from './numbers';

describe('formatBrlCurrency', () => {
  it('should return positive brazilian currency', () => {
    const formatted = formatBrlCurrency(1000);
    expect(formatted).toContain('R$');
    expect(formatted).toContain('1.000,00');
  });
});

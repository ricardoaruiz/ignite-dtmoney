/**
 * Format value with currency pattern
 */
export const formatBrlCurrency = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

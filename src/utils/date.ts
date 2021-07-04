export const formatBRLDate = (date: Date) => {
  return Intl.DateTimeFormat('pt-BR').format(date);
};

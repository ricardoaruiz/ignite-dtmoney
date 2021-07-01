import { Transaction } from 'components';

export const transactionsMock: Transaction[] = [
  {
    title: 'Desenvolvimento de site',
    value: 1200,
    type: 'Venda',
    date: new Date(),
  },
  {
    title: 'Venda da bicicleta',
    value: 590,
    type: 'Venda',
    date: new Date(),
  },
  {
    title: 'Pagamento da conta de luz',
    value: -280.23,
    type: 'Casa',
    date: new Date(),
  },
];

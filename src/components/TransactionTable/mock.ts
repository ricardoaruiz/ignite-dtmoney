import { Transaction } from 'components';

export const transactionsMock: Transaction[] = [
  {
    id: 1,
    title: 'Desenvolvimento de site',
    value: 1200,
    type: 'Venda',
    date: new Date(2021, 6, 1),
  },
  {
    id: 2,
    title: 'Venda da bicicleta',
    value: 590,
    type: 'Venda',
    date: new Date(2021, 6, 1),
  },
  {
    id: 3,
    title: 'Pagamento da conta de luz',
    value: -280.23,
    type: 'Casa',
    date: new Date(2021, 6, 1),
  },
];

import { Transaction } from 'types/api/transaction';

export const transactionsMock: Transaction[] = [
  {
    id: 1,
    title: 'Desenvolvimento de site',
    value: 1200,
    type: 'Venda',
    category: 'Produtos',
    date: new Date(2021, 6, 1),
  },
  {
    id: 2,
    title: 'Venda da bicicleta',
    value: 590,
    type: 'Venda',
    category: 'Produtos',
    date: new Date(2021, 6, 1),
  },
  {
    id: 3,
    title: 'Pagamento da conta de luz',
    value: -280.23,
    type: 'Casa',
    category: 'Contas',
    date: new Date(2021, 6, 1),
  },
];

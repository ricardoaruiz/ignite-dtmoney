import React from 'react';
import Modal from 'react-modal';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import closeImg from 'assets/close.svg';

import { Transaction } from 'types/api/transaction';
import { useTransactions } from 'services/useTransactions';

import * as S from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type NewTransactionFormData = Transaction;

const initialFormData = {
  title: '',
  value: 0,
  type: 'income',
  category: '',
  date: new Date(),
};

Modal.setAppElement('#root');

export const NewTransactionModal = ({
  isOpen = false,
  onClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();
  const [transaction, setTransaction] =
    React.useState<S.Transactions>('income');

  const [data, setData] =
    React.useState<NewTransactionFormData>(initialFormData);

  const handleCreateNewTransaction = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();

        if (
          !Object.values(data).every(
            (value) => String(value) !== '0' && String(value) !== '',
          )
        ) {
          alert('Existem campos obrigatórios que não foram informados.');
          return;
        }

        await createTransaction(data);
      } catch (error) {
        // TODO: tratar o erro
        console.log('Erro ao criar uma transação', error);
      }
    },
    [createTransaction, data],
  );

  const handleChangeFormData = React.useCallback(
    (key: string, value: string | number) => {
      setData((state) => ({ ...state, [key]: value }));
    },
    [],
  );

  const handleChangeTransactionType = React.useCallback(
    (transaction: S.Transactions) => {
      setTransaction(transaction);
      handleChangeFormData('type', transaction);
    },
    [handleChangeFormData],
  );

  const handleCloseModal = React.useCallback(() => {
    setTransaction('income');
    setData(initialFormData);
    onClose();
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={S.modalStyles}
    >
      <S.CloseButton onClick={handleCloseModal}>
        <img src={closeImg} alt='Fechar' />
      </S.CloseButton>

      <S.Title>Cadastrar transação</S.Title>

      <S.Form onSubmit={handleCreateNewTransaction}>
        <S.Input
          type='text'
          name='title'
          placeholder='Título'
          autoComplete='off'
          value={data.title}
          onChange={(event) =>
            handleChangeFormData('title', event.target.value)
          }
        />
        <S.Input
          type='number'
          name='value'
          placeholder='Valor'
          autoComplete='off'
          value={data.value}
          onChange={(event) =>
            handleChangeFormData('value', Number(event.target.value))
          }
        />

        <S.TransactionButtons>
          <S.TransactionButton
            type='button'
            transaction={transaction}
            isActive={transaction === 'income'}
            onClick={() => handleChangeTransactionType('income')}
          >
            <img src={incomeImg} alt='Entrada' />
            Entrada
          </S.TransactionButton>
          <S.TransactionButton
            type='button'
            transaction={transaction}
            isActive={transaction === 'outcome'}
            onClick={() => handleChangeTransactionType('outcome')}
          >
            <img src={outcomeImg} alt='Saída' />
            Saída
          </S.TransactionButton>
        </S.TransactionButtons>

        <S.Input
          type='text'
          name='category'
          placeholder='Categoria'
          autoComplete='off'
          value={data.category}
          onChange={(event) =>
            handleChangeFormData('category', event.target.value)
          }
        />

        <S.SubmitButton type='submit'>Cadastrar</S.SubmitButton>
      </S.Form>
    </Modal>
  );
};

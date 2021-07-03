import React from 'react';
import Modal from 'react-modal';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import closeImg from 'assets/close.svg';

import * as S from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

Modal.setAppElement('#root');

export const NewTransactionModal = ({
  isOpen = false,
  onClose,
}: NewTransactionModalProps) => {
  const [transaction, setTransaction] =
    React.useState<S.Transactions>('income');

  const handleCloseModal = React.useCallback(() => {
    setTransaction('income');
    onClose();
  }, []);

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

      <S.Form>
        <S.Input
          type='text'
          name='title'
          placeholder='Título'
          autoComplete='off'
        />
        <S.Input
          type='number'
          name='value'
          placeholder='Valor'
          autoComplete='off'
        />

        <S.TransactionButtons>
          <S.TransactionButton
            type='button'
            transaction={transaction}
            isActive={transaction === 'income'}
            onClick={() => setTransaction('income')}
          >
            <img src={incomeImg} alt='Entrada' />
            Entrada
          </S.TransactionButton>
          <S.TransactionButton
            type='button'
            transaction={transaction}
            isActive={transaction === 'outcome'}
            onClick={() => setTransaction('outcome')}
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
        />

        <S.SubmitButton type='submit'>Cadastrar</S.SubmitButton>
      </S.Form>
    </Modal>
  );
};

import React from 'react';
import { Dashboard, Header, NewTransactionModal } from 'components';

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    React.useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const hanleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onClose={hanleCloseNewTransactionModal}
      />
    </>
  );
};

import { useContext } from 'react';
import { DtMoneyContext } from 'contexts/DtMoneyContext';

export const useDtMoneyContext = () => {
  const context = useContext(DtMoneyContext);

  if (!context) {
    throw new Error(
      'useDtMoneyContext must be use under DtMoneyContextProvider',
    );
  }

  return context;
};

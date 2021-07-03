/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import { Header } from './index';

jest.mock('components/NewTransactionModal', () => ({
  NewTransactionModal: () => <div></div>,
}));

describe('<Header />', () => {
  it('should be render correctly', () => {
    const onOpenNewTransactionModalMocked = jest.fn();
    const { container } = render(
      <Header onOpenNewTransactionModal={onOpenNewTransactionModalMocked} />,
    );

    expect(container.parentElement).toMatchSnapshot();
  });
});

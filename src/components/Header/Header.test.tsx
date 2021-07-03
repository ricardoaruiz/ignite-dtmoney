/* eslint-disable react/display-name */
import { renderWithTheme } from 'utils/test';
import { Header } from './index';

jest.mock('components/NewTransactionModal', () => ({
  NewTransactionModal: () => <div></div>,
}));

describe('<Header />', () => {
  it('should be render correctly', () => {
    const onOpenNewTransactionModalMocked = jest.fn();
    const { container } = renderWithTheme(
      <Header onOpenNewTransactionModal={onOpenNewTransactionModalMocked} />,
    );

    expect(container.parentElement).toMatchSnapshot();
  });
});

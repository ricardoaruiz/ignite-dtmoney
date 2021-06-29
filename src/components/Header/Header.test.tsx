import { render } from '@testing-library/react';
import { Header } from './index';

describe('<Header />', () => {
  it('should be render correctly', () => {
    const { container } = render(<Header />);

    expect(container.parentElement).toMatchSnapshot();
  });
});

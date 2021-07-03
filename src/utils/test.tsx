import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from 'styles/themes/theme';

export const renderWithTheme = (children: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

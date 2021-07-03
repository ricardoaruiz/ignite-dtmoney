/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components';
import { Theme } from 'styles/themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

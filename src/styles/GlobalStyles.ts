import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;
    --text-tile: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

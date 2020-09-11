import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 50px;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  ul {
    list-style-type: none;
    padding: 5px;
    margin: 0;
  };

  p, h3 {
    margin: 0;
  }

  input, button {
    margin: 20px 0;
    padding: 5px;
  }

  a {
    text-decoration: none;
    padding: 10px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    &:hover {
        color: #39cccc;
    }
    transition: all 0.25s linear;
  }
`;
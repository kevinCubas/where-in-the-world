import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    color: ${({ theme }) => theme.colors.text};
  }
`

import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
  }
`

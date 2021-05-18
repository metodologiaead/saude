import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-family: 'Roboto', sans-serif;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.texts};
      font-size: ${theme.font.sizes.small};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.texts};
    }
    h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.texts};
    }
    h3, h4 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.texts};
    }
  `}
`

export default GlobalStyle

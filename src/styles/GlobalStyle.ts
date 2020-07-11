import { createGlobalStyle } from 'styled-components'
import { remote } from 'electron'

export const GlobalStyle = createGlobalStyle`
  :root {
    --window-width: ${() => `${remote.getCurrentWindow().getBounds().width}px`}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    flex: 1;
    width: 100vw;
    height: 100vh;
    background-color: #191622;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
`

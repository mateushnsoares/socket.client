import { createGlobalStyle } from 'styled-components'
import { remote } from 'electron'

export const GlobalStyle = createGlobalStyle`
  :root {
    --window-width: ${() => `${remote.getCurrentWindow().getBounds().width}px`}
  }


  html, body, #root {
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    flex: 1;
    width: 100vw;
    height: 100vh;
    background-color: #191622;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
`

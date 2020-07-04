import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

import Header from './components/Header'
import { defaultTheme } from './styles/theme'
import Layout from './components/Layout'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Layout />
    </ThemeProvider>
  )
}

render(<App />, mainElement)

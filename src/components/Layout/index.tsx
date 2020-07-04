import React from 'react'

import { Container } from './styles'
import Aside from '../Aside'
import RequestInfo from '../RequestInfo'
import RequestResponse from '../RequestResponse'

const Layout: React.FC = () => {
  return (
    <Container>
      <Aside />
      <RequestInfo />
      <RequestResponse />
    </Container>
  )
}

export default Layout

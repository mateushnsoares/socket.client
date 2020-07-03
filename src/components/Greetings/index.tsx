import React from 'react'

import { Container, Image, Text } from './styles'

const Greetings: React.FC = () => {
  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron WebSocket Client.</Text>
    </Container>
  )
}

export default Greetings

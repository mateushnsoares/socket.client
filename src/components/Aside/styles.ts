import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.backgrounds.lightest};
  height: calc(100vh - 40px);
`

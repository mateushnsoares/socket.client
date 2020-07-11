import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  grid-area: RI;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid ${props => props.theme.backgrounds.lightest};
  height: calc(100vh - 40px);
`

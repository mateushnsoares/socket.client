import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  border-right: 1px solid ${props => props.theme.backgrounds.lightest};
  height: calc(100vh - 40px);
`

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-columns: 280px auto auto;
  grid-template-rows: 100%;

  grid-template-areas:
    'AS RI RR'
  ;
`

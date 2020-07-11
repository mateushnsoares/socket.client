import styled from 'styled-components'
import { MdSettings } from 'react-icons/md'

export const Workspace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => (props.theme.colors.purple)};
`

export const Settings = styled(MdSettings).attrs({
  size: 20
})`
  
`

import styled from 'styled-components'

interface RequestTypeProps {
  type: 'send' | 'listen'
}

interface RequestFolderContainerNameProps {
  selected?: boolean
}

export const Container = styled.div`
  height: calc(100vh - 70px);
`

export const RequestFolderContainer = styled.div<RequestFolderContainerNameProps>`
  display: flex;
  flex-direction: row;
  background-color: ${props =>
    props.selected
    ? props.theme.backgrounds.lightest
    : props.theme.backgrounds.darker
  };
  padding: 10px;
`
export const RequestFolderName = styled.input<RequestFolderContainerNameProps>`
  border: 0;
  background-color: ${props =>
    props.selected
    ? props.theme.backgrounds.lightest
    : props.theme.backgrounds.darker
  };
  color: #fff;
  outline: none;
`
export const RequestType = styled.div<RequestTypeProps>`
  color: ${
  props => props.type === 'send'
    ? props.theme.colors.green
    : props.theme.colors.purple
  };
  margin-right: ${
  props => props.type === 'send'
    ? '25px'
    : '15px'
  };
`

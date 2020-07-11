import styled from 'styled-components'

interface RequestTypeProps {
  type: 'send' | 'listen'
}

export const Container = styled.div`
  height: calc(100vh - 70px);
`

export const RequestFolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.backgrounds.darker};
  padding: 10px;
`
export const RequestFolderName = styled.div``
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

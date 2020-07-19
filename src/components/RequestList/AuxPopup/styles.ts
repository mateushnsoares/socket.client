import styled from 'styled-components'

interface ContainerProps {
  readonly display: 'none' | 'flex'
  readonly top: number
  readonly left: number
}

export const Container = styled.div<ContainerProps>`
  display: ${props => props.display};
  flex-direction: column;
  position: absolute;
  z-index: 50;
  padding: 20px;
  padding-bottom: 15px;
  width: 200px;
  background-color: ${props => props.theme.backgrounds.darkest};
  border-radius: 5px;
  margin-top: ${props => `${props.top}px`};
  margin-left: ${props => `${props.left}px`};
`

export const CreateRequest = styled.button`
  display: flex;
  flex-direction: row;
  border: 0;
  background-color: ${props => props.theme.backgrounds.darkest};
  color: ${props => props.theme.colors.white};
  outline: none;
`

export const CreateFolderRemove = styled.button`
  display: flex;
  flex-direction: row;
  border: 0;
  background-color: ${props => props.theme.backgrounds.darkest};
  color: ${props => props.theme.colors.white};
  outline: none;
`

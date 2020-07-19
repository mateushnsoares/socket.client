import styled from 'styled-components'

interface ContainerProps {
  display: 'none' | 'flex'
}

interface OptionProps {
  type: 'send' | 'listen'
}

export const Container = styled.form<ContainerProps>`
  position: absolute;
  background-color: ${props => props.theme.backgrounds.darker};
  display: ${props => props.display};
  width: calc(var(--window-width) - 300px);
  margin: 50px 14.5% 0 !important;
  justify-content: center;
  padding: 10px;
  z-index: 50;
`

export const Input = styled.input`
  background-color: ${props => props.theme.backgrounds.darkest};
  border: 1px solid ${props => props.theme.backgrounds.lightest};
  height: 25px;
  width: calc(var(--window-width) - 400px);
  margin-right: 15px;
  color: #FFF;
`

export const Select = styled.select`
  border: 0;
  background-color: #111;
  color: ${props => props.theme.colors.white};
  outline: none;
  margin-right: 15px;
`

export const Option = styled.option<OptionProps>`
  color: ${
    props =>
      props.type === 'send'
        ? props.theme.colors.green
        : props.theme.colors.purple
  };
  padding: 10px;
`

export const SubmitButton = styled.button`
  border: 0;
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  padding: 4px;
`

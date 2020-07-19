import styled from 'styled-components'
import { FiBook, FiArrowRightCircle } from 'react-icons/fi'

interface NoSelectedRequestOrTypeListenProps {
  typeListen?: boolean
}

export const Container = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.backgrounds.lightest};
  height: calc(100vh - 40px);
  resize: horizontal;
  justify-content: center;
  div {
    background-color: ${props => props.theme.backgrounds.darkest};
  }
`

export const Select = styled.select`
  background-color: ${props => props.theme.backgrounds.darkest};
  width: calc(calc(100% - 48px) / 3);
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  height: 36px;
  color: #fff; 
  border: 0;
`

export const Option = styled.option`
  outline: none;
`

export const Url = styled.input`
  flex: 1;
  padding-left: 10px;
  height: 36px;
  width: calc(calc(100% - 48px) / 3);
  background-color: ${props => props.theme.backgrounds.darkest};
  border: 0;
  border-left: 1px solid ${props => props.theme.backgrounds.lightest};
  position: absolute;
  top: 0;
  left: calc(calc(100% - 48px) / 3);
  color: ${props => props.theme.colors.white};
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`

export const Message = styled.input`
  flex: 1;
  padding-left: 10px;
  height: 36px;
  width: calc(calc(100% - 48px) / 3);
  background-color: ${props => props.theme.backgrounds.darkest};
  border: 0;
  position: absolute;
  top: 0;
  left: calc(calc(calc(100% - 48px) / 3) * 2);
  border-left: 1px solid ${props => props.theme.backgrounds.lightest};
  color: ${props => props.theme.colors.white};
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  width: 48px;
  height: 36px;
  border: 0;
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.colors.purple};
  outline: none;
`

export const SubmitIcon = styled(FiArrowRightCircle).attrs({
  size: 20
})`
  color: ${props => props.theme.colors.white};
`

export const NoSelectedRequestOrTypeListen =
  styled.div<NoSelectedRequestOrTypeListenProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${props => props.theme.backgrounds.darker};
  border-top: ${
    props => props.typeListen ? '1px' : '0px'
  } solid ${props => props.theme.backgrounds.lightest};
`

export const Icon = styled(FiBook)`
  padding: 0;
  margin: 0 auto 40px;
  width: 150px;
  height: 120px;
  stroke: #322d41;
  stroke-width: 0.8px;
`

export const Text = styled.p.attrs({
  draggable: false
})`
  margin-top: 14px;
  font-size: 20px;
  font-weight: bold;
  color: #322d41;
  text-align: center;
  &::selection {
    display: none;
  }
`

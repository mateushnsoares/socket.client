import styled from 'styled-components'
import { darken, lighten, saturate } from 'polished'

export const Container = styled.div`
  flex: 1;
  font-size: 1em;
  position: relative;
  height: 100%;
  border: 1px solid ${props => props.theme.backgrounds.darkest};
  border-top: 1px solid ${props => props.theme.backgrounds.lightest};
  background-color: ${props => props.theme.backgrounds.darker};
  margin: 0;
  position: relative;
`

export const CodeEditorTextarea = styled.textarea`
    display: flex;
    padding: 0;
    width: 100%;
    height: calc(100% - 2.0px);
    outline: none;
    line-height: 20px !important;
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: transparent;
    white-space: pre-wrap;
    font-size: 1em;
    word-wrap: break-word;
    margin: 0;
    margin-top: 1px;
    opacity: 1;
    resize: none;
    caret-color: #fff;

`

export const CodeContainer = styled.pre`
  display: flex; 
  pointer-events: none;
  z-index: 3;
  margin: 0;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  color: white;
  background: transparent;
  
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  overflow: auto;
`

export const CodeMain = styled.code`
  flex: 1;
  position: absolute;
  line-height: 20px !important;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: block;
  margin: 0;
  padding: 0;
  color: white;
  background: transparent;  
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  height: 100%;
  width: 100%;

  .token.punctuation {
    opacity: .7;
  }

  .token.namespace {
    opacity: .7;
  }

  .token.boolean,
  .token.number {
    color: ${props => props.theme.colors.cyan};
  }

  .token.string {
    color: ${props => darken(0.2, saturate(2, props.theme.colors.green))}
  }

  .token.operator + .token.string {
    color: ${props => lighten(0.08, saturate(3, props.theme.colors.yellow))}
  }
`

export const CodeHelper = styled.div`
  border-top: 1px solid ${props => props.theme.backgrounds.lightest};
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 10px;
`

export const BeautifyButton = styled.button`
  display: flex;
  border: 0;
  padding: 0 15px 10px 15px;
  height: 210% !important;
  background-color: ${props => props.theme.backgrounds.darkest};
  color: #fff;
  font-size: 14px;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.backgrounds.lightest};
  }
  &:hover::after {
    margin-left: 5px;
    content: 'Beautify JSON';
  }
  line[y1="10"] {
    color: ${props => lighten(0.08, saturate(3, props.theme.colors.yellow))};
  }
  line[y1="6"] {
    color: ${props => darken(0.2, saturate(2, props.theme.colors.green))};
  }
  line[y1="14"] {
    color: ${props => darken(0.2, saturate(2, props.theme.colors.green))};
  }
  line[y1="18"] {
    color: ${props => darken(0.2, saturate(2, props.theme.colors.yellow))};
  }
`

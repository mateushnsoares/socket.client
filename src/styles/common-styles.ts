import styled from 'styled-components';

export const VerticalLine = styled.div`
  width: 1px;
  height: calc(100vh - 40px);
  background-color: ${props => props.theme.colors.opaque}
`;

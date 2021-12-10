import * as T from 'lib/types/styles';
import styled from 'styled-components';

export const Button = styled.button<T.Button>`
  all: unset;
  border: 1px ${props => (props?.dashed ? 'dashed' : 'solid')} #f1f1f1;
  text-align: center;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  ${props => props?.fontColor ? `color: ${props?.fontColor};` : ''}
  ${props => props?.width ? `width: calc(${props?.width} - 18px);` : ''}
`;

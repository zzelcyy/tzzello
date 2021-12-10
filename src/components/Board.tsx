import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'lib/styles';

export const Board: FC = () => (
  <BoardContainer>
    <Button dashed width="100%" fontColor="#f1f1f1">+ 새 작업 추가</Button>
  </BoardContainer>
);

const BoardContainer = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.5);
  width: 300px;
  padding: 12px;
  border-radius: 4px;
`;

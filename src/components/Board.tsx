import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'lib/styles';
import { Card } from './Card';

interface IProps {
  name: string;
}

export const Board: FC<IProps> = ({ name }) => (
  <BoardContainer>
    <BoardName>{name}</BoardName>
    <Card />
    <Button dashed width="100%" fontColor="#f1f1f1">
      + 새 작업 추가
    </Button>
  </BoardContainer>
);

const BoardContainer = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.5);
  width: 300px;
  padding: 12px;
  border-radius: 4px;
`;

const BoardName = styled.h2`
  font-size: 18px;
  margin: 8px 0 12px;
`;

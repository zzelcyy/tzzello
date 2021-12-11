import React, { FC } from 'react';
import styled from 'styled-components';

export const Card: FC = () => <CardContainer>
    <CardTitle>트렐로 개발하기</CardTitle>
    <CardDeadline><i>~ 2020.12.31</i></CardDeadline>
    <CardDescription>리액트 드래그 앤 드롭 개발 학습을 위한 작업</CardDescription>
</CardContainer>;

const CardContainer = styled.div`
  border-radius: 2px;
  padding: 8px 10px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin: 4px 0;
`;

const CardDeadline = styled.p`
  font-size: 14px;
  color: #787878;
  margin: 4px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

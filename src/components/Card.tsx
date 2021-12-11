import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  deadline: string;
  desc: string;
}

export const Card: FC<IProps> = ({title, deadline, desc}) => <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardDeadline><i>~ {deadline}</i></CardDeadline>
    <CardDescription>{desc}</CardDescription>
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

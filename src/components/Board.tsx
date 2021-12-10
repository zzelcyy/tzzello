import React, { FC } from 'react';
import styled from 'styled-components';
import {Button} from "lib/styles"

export const Board: FC = () => <BoardContainer>
    <Button>새 작업 추가</Button>
</BoardContainer>;

const BoardContainer = styled.div`

`;

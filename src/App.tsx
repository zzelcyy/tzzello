import React, { FC } from 'react';
import styled from 'styled-components';
import { Board } from 'components/index';
import GlobalStyle from 'lib/styles/GlobalStyle';

const App: FC = () => (
  <div>
    <GlobalStyle />
    <BoardsContainer>
      <Board />
    </BoardsContainer>
  </div>
);

export default App;

const BoardsContainer = styled.div`
  padding: 16px;
  white-space: nowrap;
  overflow-x: scroll;
`;

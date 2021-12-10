import React, { FC } from 'react';
import { Board } from 'components/index';
import GlobalStyle from 'lib/styles/GlobalStyle';

const App: FC = () => (
  <div>
    <GlobalStyle />
    <Board />
  </div>
);

export default App;

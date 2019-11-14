import React from 'react';

import SearchBar from '../SearchBar';
import DataViewer from '../DataViewer';
import { Wrapper } from './styled';

function App() {
  return (
    <Wrapper>
      <SearchBar />
      <DataViewer />
    </Wrapper>
  );
}

export default App;

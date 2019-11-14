import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import DataViewer from '../DataViewer';
import { Wrapper } from './styled';

function App() {
  const [query, setQuery] = useState('');

  return (
    <Wrapper>
      <SearchBar search={(value) => setQuery(value)} />
      <DataViewer />
    </Wrapper>
  );
}

export default App;

import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import DataViewer from '../DataViewer';
import { Wrapper } from './styled';
import mockData from '../../assets/sentences.json';
import { searchData } from '../../utils/search';

function App() {
  const [query, setQuery] = useState('');


  return (
    <Wrapper>
      <SearchBar search={(value) => setQuery(value)} />
      <DataViewer data={searchData(query, mockData)} />
    </Wrapper>
  );
}

export default App;

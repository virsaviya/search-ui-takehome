import FlexSearch from 'flexsearch';

const PRESET = 'match';

export const searchData = (query, data) => {
  const searchIndex = new FlexSearch(PRESET);
  data.forEach(item => searchIndex.add(item.id, item.data))

  const results = searchIndex.search(query).map(r => data.find(d => d.id === r));
  const nonMatchedResults = data.filter((item) => !results.find(r => r.id === item.id));

  return query === ''
    ? data
    :[
      ...results.map(r => ({ ...r, disabled: false, })),
      ...nonMatchedResults.map(r => ({ ...r, disabled: true, })),
    ];
}

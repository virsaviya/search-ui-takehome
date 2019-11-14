export const searchData = (query, data) => {
  const results = data.map(item => {
    return item.data.includes(query)
      ? {...item, includes: true }
      : {...item, includes: false }
  });
  return results.sort((a, b) => b.includes - a.includes);
}

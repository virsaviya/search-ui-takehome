import React from 'react';
import TextField from '@material-ui/core/TextField';

function SearchBar({ search }) {
  return (
    <form>
      <TextField
        onChange={(e) => search(e.target.value)}
        id="outlined-basic"
        label="Search"
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}

export default SearchBar;

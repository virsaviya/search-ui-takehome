import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ItemWrapper } from './styled';

function DataViewer({ data }) {
  return (
    <div>
      <List aria-label="list of sentences">
        {
          data.map(item => (
            <ItemWrapper key={item.id} disabled={item.disabled}>
              <ListItem button={!item.disabled}>
                <Avatar src={item.avatar} />
                <ListItemText primary={item.data} />
              </ListItem>
            </ItemWrapper>
          ))
        }
      </List>
    </div>
  );
}

export default DataViewer;

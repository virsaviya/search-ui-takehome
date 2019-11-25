import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { ItemWrapper, Highlighted } from "./styled";

function DataViewer({ data, query }) {
  const getHighlightedText = (text, higlight) => {
    let parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === higlight.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <div>
      <List aria-label="list of sentences">
        {data.map(item => (
          <ItemWrapper key={item.id} disabled={item.disabled}>
            <ListItem button={!item.disabled}>
              <Avatar src={item.avatar} />
              {getHighlightedText(item.data, query)}
            </ListItem>
          </ItemWrapper>
        ))}
      </List>
    </div>
  );
}

export default DataViewer;

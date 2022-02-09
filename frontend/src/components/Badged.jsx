import React from "react";
import { Badge } from "@material-ui/core";


const Badged = (props, children) => {
  const { badgeContent} = props;
  return (
    <Badge
      badgeContent={badgeContent}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      color="primary"
     
    >
      {props.children}
    </Badge>
  );
};

export default Badged;

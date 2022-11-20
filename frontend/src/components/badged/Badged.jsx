import { Badge } from "@material-ui/core";

const Badged = ({ children, badgeContent }) => {
  return (
    <Badge
      badgeContent={badgeContent}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      color="primary"
    >
      {children}
    </Badge>
  );
};

export default Badged;

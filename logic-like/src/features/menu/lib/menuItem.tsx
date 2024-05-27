import { FC } from "react";
import Button from "@mui/material/Button";

type Children = {
  id: string;
  title: string;
};

type MenuItemProps = {
  children: Children;
  onClick: () => void;
};

export const MenuItem: FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <Button
      variant="text"
      onClick={onClick}
      sx={{
        justifyContent: "flex-start",
        padding: "8px 16px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        color: "black",
        borderRadius: "12px",
        "&:hover": {
          backgroundColor: "rgb(95, 191, 119)",
          borderRadius: "12px",
        },
      }}
    >
      {children.title}
    </Button>
  );
};

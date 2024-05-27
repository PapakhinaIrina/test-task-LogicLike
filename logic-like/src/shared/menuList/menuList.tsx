import { FC } from "react";
import { MenuItem } from "../../features/menu/lib/menuItem";

interface IMenuListProps {
  uniqueTags: string[];
  onClick: (item: string) => void;
}
export const MenuList: FC<IMenuListProps> = ({ uniqueTags, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        padding: 16,
        gap: 8,
        border: "1px solid rgb(202, 202, 223)",
        borderRadius: "20px",
        marginRight: "24px",
      }}
    >
      {uniqueTags.length &&
        uniqueTags.map((item, index) => (
          <MenuItem
            key={`${item}-${index}`}
            children={item}
            onClick={() => onClick(item)}
          />
        ))}
    </div>
  );
};

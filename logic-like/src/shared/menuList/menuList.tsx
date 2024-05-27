import { MenuItem } from "../../features/menu/lib/menuItem";

export const MenuList = () => {
  const menuItems = [
    {
      id: "1",
      title: "Все типы",
    },
    {
      id: "2",
      title: "Логика и мышление",
    },
    {
      id: "3",
      title: "Загадки",
    },
    {
      id: "4",
      title: "Головоломки",
    },
    {
      id: "5",
      title: "Путешествия",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        padding: 16,
        gap: 8,
        border: "1px solid rgb(202, 202, 223)",
        borderRadius: 20,
      }}
    >
      {menuItems.length &&
        menuItems.map((item) => (
          <MenuItem
            key={item.id}
            children={item}
            onClick={() => {
              console.log(item);
            }}
          />
        ))}
    </div>
  );
};

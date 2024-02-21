import { Box } from "@chakra-ui/react";

const Sidebar = () => {

  const menuItems = [
    { label: "メニュー1", path: "/" },
    { label: "メニュー2", path: "/" },
    { label: "メニュー3", path: "/" },
  ];

  return (
    <Box bg="gray.200" w="250px" h="100vh" p={4}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            {item.label}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Sidebar;

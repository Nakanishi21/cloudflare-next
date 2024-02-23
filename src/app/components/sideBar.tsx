"use client"

import { Box, Button, Icon } from "@chakra-ui/react";
import { ChatIcon, EditIcon, InfoOutlineIcon } from "@chakra-ui/icons";

const Sidebar = () => {

  const menuItems = [
    { name: 'メニュー1', path: '/', icon: EditIcon},
    { name: 'メニュー2', path: '/', icon: InfoOutlineIcon},
    { name: 'メニュー3', path: '/', icon: ChatIcon},
];

return (
  <Box minHeight="100vh" bg="gray.200" w="200px">
    {menuItems.map((item) => (
      <label key={item.name}>
        <Box mt="10px" ml="10px">
          <Button
              variant="ghost"
              onClick={() => {}}
          >
            <Icon as={item.icon} w={7} h={7} mr="13px" />
            {item.name}
          </Button>
        </Box>
      </label>
    ))}
  </Box>
);
};

export default Sidebar;

import React from "react";
import { Box, VStack, Heading, Menu, MenuButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box w="20%" p="5" borderWidth="1px" borderColor="gray.200">
      <Heading size="md" mb="6">
        Menu
      </Heading>
      <VStack align="stretch" spacing="3">
        <Menu>
          <MenuButton as={Link}>Basic Definitions</MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/unit-names">
              Unit Names
            </MenuItem>
            <MenuItem as={RouterLink} to="/">
              Stores
            </MenuItem>
            <MenuItem as={RouterLink} to="/users">
              Users
            </MenuItem>
            {/* MenuItem for "Items" has been removed */}
            <MenuItem as={RouterLink} to="/products">
              Products
            </MenuItem>
            <MenuItem as={RouterLink} to="/suppliers">
              Suppliers
            </MenuItem>
            {/* Other Basic Definitions items will go here */}
          </MenuList>
        </Menu>
      </VStack>
    </Box>
  );
};

export default Sidebar;

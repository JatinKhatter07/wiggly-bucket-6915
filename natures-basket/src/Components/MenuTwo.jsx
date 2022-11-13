import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function MenuTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          aria-label="Courses"
          fontWeight="medium"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          letterSpacing="1px"
        >
          BLOG
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>EVERYTHING FOOD</MenuItem>
          <MenuItem>RECIPE</MenuItem>
          <MenuItem>NEWS LETTER</MenuItem>
          <MenuItem>NBTV</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

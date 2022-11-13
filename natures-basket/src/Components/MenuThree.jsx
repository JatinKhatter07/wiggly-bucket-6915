import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function MenuThree() {
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
          w={{"sm":"100%"}}
          fontSize={{ base: '16px', md: '16px', lg: '16px' }}
        >
          CONNOISSEUR'S
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>L'EXCLUCIF</MenuItem>
          <MenuItem>HEALTHY ALTERNATIVES</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function MenuOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen}>
        <MenuButton
          variant="ghost"
          mx={1}
          // py={[1, 2, 2]}
          // px={4}
          borderRadius={5}
          bg="#f3f3f3"
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          color="#b71761"
          letterSpacing="3px"
        >
          SHOP BY CATEGORY {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <NavLink to="/product">
            <MenuItem>Gift Hampers</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Fruits & Vegetables</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Cheese, Meat & Fruit Platters</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Delicatessen & Cheese</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>International Cuisine</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Health</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Indian Grocery</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Confectionary & Patisserie</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Meats, Seafood and Eggs</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Snack Bar</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Snacks & Beverages</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Breakfast, Dairy & Bakery</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Instant Meals & Aids</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>The Good Food Cafe</MenuItem>
          </NavLink>
          <NavLink to="/product">
            <MenuItem>Packing Material</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
    </div>
  );
}

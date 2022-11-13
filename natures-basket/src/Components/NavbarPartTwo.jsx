import { Box, Button, Flex, LinkBox } from "@chakra-ui/react";
import React from "react";
import MenuOne from "./MenuOne";
import MenuThree from "./MenuThree";
import MenuTwo from "./MenuTwo";
import Styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavbarPartTwo() {
  return (
    <Flex alignItems="center" border="1px solid rgb(224, 224, 224)" mt="8" overflow={"scroll"}>
      <MenuOne />
      <NavLink to="/cart">
        <Button
          borderRadius="0px"
          bg="transparent"
          className={Styles.navButton}
        >
          MY ORDERS
        </Button>
      </NavLink>
      <NavLink to="/product">
        <Button
          borderRadius="0px"
          bg="transparent"
          className={Styles.navButton}
          mr={20}
        >
          GIFTING
        </Button>
      </NavLink>
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        REWARDS
      </Button>
      <MenuTwo />
      <NavLink to="/product">
        <Button
          borderRadius="0px"
          bg="transparent"
          className={Styles.navButton}
        >
          OFFERS
        </Button>
      </NavLink>
      <Box><MenuThree /></Box>
      
      <Button ml={20} borderRadius="0px" bg="transparent" className={Styles.navButton}>
        BOOK STORE VISIT
      </Button>
    </Flex>
  );
}

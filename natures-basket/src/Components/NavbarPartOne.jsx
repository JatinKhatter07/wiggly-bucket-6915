import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import Styles from "./Navbar.module.css";
import { AppContext } from "../Context/AppContext";
import { loginFailure } from "../Context/ActionCreaters";

export default function NavbarPartOne() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Flex alignItems="center" flexWrap={"wrap"} >
      <Box w="24%">
        <NavLink to="/">
          <Image
            src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
            alt="Logo"
            p="0px"
            cursor="pointer"
          />
        </NavLink>
      </Box>
      <Spacer />
      <Box w="72%">
        <Flex alignItems="center" pl="8" overflow={"scroll"}>
          <Flex>
            <Box className={Styles.navbarBoxes}>Online Slots Availability</Box>
            <Box className={Styles.navbarBoxes}>Fresh & Fast</Box>
            <Box className={Styles.navbarBoxes}>Store Locator</Box>
            <Box className={Styles.navbarBoxes}>Contact Us</Box>
          </Flex>
          <Spacer />
          <Flex>
            {state.isAuth ? (
              <Box className={Styles.navbarBoxes}>
                <Button
                  onClick={() => {
                    dispatch({ type: loginFailure });
                  }}
                  bg="whiteAlpha.900"
                  fontSize="12px"
                  fontWeight="500"
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <>
                <Box className={Styles.navbarBoxes}>
                  <NavLink to="/login">Login</NavLink>
                </Box>
                <Box className={Styles.navbarBoxes} border="0px">
                  <NavLink to="/signup">Register</NavLink>
                </Box>
              </>
            )}
          </Flex>
        </Flex>
        <Flex alignItems="center" mt="10px">
          <Button
            className={Styles.codeButton}
            borderRadius="5px 0px 0px 5px"
            fontSize="12px"
            leftIcon={<i class="fa-solid fa-pen"></i>}
            mr={2}
          >
            121004
          </Button>
          <Box className={Styles.citySelect}>
            <Select border="0px" fontSize="14px">
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Thane">Thane</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Raigarh MH">Raigarh MH</option>
            </Select>
          </Box>
          <Input
            fontSize="12px"
            placeholder="Start shopping..."
            className={Styles.searchBar}
            borderRadius="0px"
          />
          <Box className={Styles.searchIcon}>
            <SearchIcon />
          </Box>
          <Box className={Styles.startIcon}>
            <StarIcon />
          </Box>
          <NavLink to="/cart">
            <Box className={Styles.cartIcon}>
              <i class="fa-solid fa-cart-plus"></i>
            </Box>
          </NavLink>
        </Flex>
      </Box>
    </Flex>
  );
}

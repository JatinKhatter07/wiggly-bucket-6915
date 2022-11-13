import { Box } from "@chakra-ui/react";
import React from "react";
import NavbarPartOne from "./NavbarPartOne";
import NavbarPartTwo from "./NavbarPartTwo";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <Box className={Styles.mainBox}>
      <Box w={{ sm: "100%", md: "100%", lg: "85%" }} m="auto" >
        <NavbarPartOne />
        <NavbarPartTwo />
      </Box>
    </Box>
  );
}

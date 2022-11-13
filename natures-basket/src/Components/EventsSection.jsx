import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";
import EventsOne from "../Assets/EventsOne.png";
import EventsTwo from "../Assets/EventsTwo.png";
import EventsThree from "../Assets/EventsThree.png";

export default function EventsSection() {
  return (
    <Box>
      <Box className={Styles.headingCat}>
        <h2 className={Styles.headingCatText}>OUR EVENTS</h2>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={{ sm: "100%", md: "100%", lg: "85%" }}
        m="auto"
        mt="1.5%"
        mb="1%"
      >
        <Image className={Styles.eventImage} src={EventsOne} alt="Image One" width={"30%"} />
        <Spacer />
        <Image className={Styles.eventImage} src={EventsTwo} alt="Image Two"  width={"30%"}/>
        <Spacer />
        <Image
          className={Styles.eventImage}
          src={EventsThree}
          alt="Image Three"
          width={"30%"}
        />
      </Flex>
    </Box>
  );
}

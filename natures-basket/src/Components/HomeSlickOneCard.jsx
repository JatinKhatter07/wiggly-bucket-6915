import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function HomeSlickOneCard({
  image,
  title,
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
}) {
  return (
    <Box w="100%" overflow={"scroll"}>
      <Link to="/product">
        <Image src={image} alt={title} className={Styles.slickCardImage} width={"100%"} />
      </Link>
      <Text className={Styles.slickCardTitle}>{title}</Text>
      <Text className={Styles.slickCardText}>{categoryOne}</Text>
      <Text className={Styles.slickCardText}>{categoryTwo}</Text>
      <Text className={Styles.slickCardText}>{categoryThree}</Text>
      <Text className={Styles.slickCardText} color="#83b748">
        {categoryFour}
      </Text>
    </Box>
  );
}

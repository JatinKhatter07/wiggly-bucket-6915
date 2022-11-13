import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";
import HomeSlickThreeCard from "./HomeSlickThreeCard";

const data = [
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0cd9b895-a680-4248-baf6-15b1bd70aaf9_425x425.jpg",
    title: "KEGGS ORGANIC EGGS PACK OF6TH",
    piece: "1Pc",
    Rprice: "125",
    Dprice: "112.5",
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3c1ff9c8-8e61-4e71-8a8b-128b8fa4307b_425x425.jpg",
    title: "WHITE PRAWNS (JHINGA) (45-50...)",
    piece: "500 gm  |  1 kg",
    Rprice: "495",
    Dprice: "445.5",
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/659eee9d-4247-437b-9397-b0aedea3dd7e_425x425.jpg",
    title: "MUTTON CURRY CUT",
    piece: "500 gm  |  1 kg",
    Rprice: "515",
    Dprice: "463.5",
  },
  {
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a67e0f73-1c86-421d-b067-5f6023c1a8de_425x425.jpg",
    title: "ON1Y GARLIC BREAD SEASONING 48g",
    piece: "1Pc",
    Rprice: "99",
    Dprice: "79.2",
  },
];

export default function DiscoverSection() {
  return (
    <Box className="container" mt="-20px" overflow={"scroll"}>
      <Box className={Styles.headingCat}>
        <h2 className={Styles.headingCatText}>DISCOVER MORE</h2>
      </Box>
      <Flex>
        <Button borderRadius="0px" className={Styles.discoverButton}>
          OFFER
        </Button>
        <Spacer />
        <Button borderRadius="0px" className={Styles.discoverButton}>
          ORGANIC
        </Button>
        <Spacer />
        <Button borderRadius="0px" className={Styles.discoverButton}>
          HEALTHY
        </Button>
        <Spacer />
        <Button borderRadius="0px" className={Styles.discoverButton}>
          GIFTS
        </Button>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {data.map((el) => (
          <HomeSlickThreeCard key={el.id} {...el} />
        ))}
      </Box>
      <br />
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import React from "react";
import HomeSlickTwoCard from "./HomeSlickTwoCard";
import Styles from "./Homepage.module.css";

const data = [
  {
    img:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    popUpMess: "DELIVERY IN 80 MINUTES",
    title: "HA TAPIOCA FLOUR 400G",
    piece: "1Pc",
    price: "210",
  },
  {
    img:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg",
    popUpMess: "DELIVERY IN 60 MINUTES",
    title: "Kwality Wall'S Ice Cream - Magnum...",
    piece: "1Pc",
    price: "80",
  },
  {
    img:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
    popUpMess: "DELIVERY IN 90 MINUTES",
    title: "Haagen-Dazs Ice Cream - Mango...",
    piece: "1Pc",
    price: "780",
  },
  {
    img:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    popUpMess: "DELIVERY IN 80 MINUTES",
    title: "HA TAPIOCA FLOUR 400G",
    piece: "1Pc",
    price: "210",
  },
];

export default function TrendingSection() {
  return (
    <Box className="container" overflow={"scroll"}>
      <Box className={Styles.headingCat}>
        <h2 className={Styles.headingCatText}>WHAT'S TRENDING</h2>
      </Box>
      <Box display="grid" gridTemplateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
        {data.map((el) => (
          <HomeSlickTwoCard key={el.id} {...el} />
        ))}
      </Box>
      <br />
    </Box>
  );
}

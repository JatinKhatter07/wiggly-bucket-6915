import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg",
  },
  {
    id: 2,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg",
  },
  {
    id: 3,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/lindt.jpg",
  },
  {
    id: 4,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg",
  },
  {
    id: 5,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg",
  },
  {
    id: 6,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg",
  },
  {
    id: 7,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg",
  },
  {
    id: 8,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg",
  },
  {
    id: 9,
    image: "https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg",
  },
];

export default function ShopBySection() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    autoplay: true,
  };

  return (
    <Box className="container">
      <Box className={Styles.headingCat}>
        <h2 className={Styles.headingCatText} pb="10px">
          SHOP BY WORLD BRANDS
        </h2>
      </Box>
      <Slider {...settings}>
        {data.map((el) => (
          <Box key={el.id}>
            <Link to="/product">
              <Image
                src={el.image}
                alt={`Shop By Image ${el.id}`}
                cursor="pointer"
              />
            </Link>
          </Box>
        ))}
      </Slider>
      <br />
    </Box>
  );
}

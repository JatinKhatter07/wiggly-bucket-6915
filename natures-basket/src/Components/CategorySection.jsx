import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GetCatData } from "./Api";
import HomeSlickOneCard from "./HomeSlickOneCard";
import Styles from "./Homepage.module.css";

const data = [
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
    title: "Exotic Vegetables",
    categoryOne: "Asparagus Artichokes",
    categoryTwo: "Avocados Peppers",
    categoryThree: "Broccoli Zucchini",
    categoryFour: "View All",
    id: "1",
  },
  {
    image: "https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
    title: "Meat, Poultry & Seafood",
    categoryOne: "Chicken Cuts Lollipops Mince",
    categoryTwo: "Fish Other Seafood",
    categoryThree: "Fresh Kebabs Others",
    categoryFour: "View All",
    id: "2",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
    title: "Fresh Artisanal Breads",
    categoryOne: "Breadsticks Crostinni Lavache",
    categoryTwo: "Buns Croissants Bagels",
    categoryThree: "Muffins Cakes Brownies",
    categoryFour: "View All",
    id: "3",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",
    title: "Daily Essentials",
    categoryOne: "Snacks & Beverages",
    categoryTwo: "Breakfast, Dairy & Bakery",
    categoryThree: "Staples",
    categoryFour: "View All",
    id: "4",
  },
  {
    image: "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png",
    title: "Organic",
    categoryOne: "Fruits & Vegetables",
    categoryTwo: "Staples",
    categoryThree: "Bakery & Dairy",
    categoryFour: "View All",
    id: "5",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png",
    title: "Ready to Eat",
    categoryOne: "Hors'D Oeuvres",
    categoryTwo: "Pastries Desserts",
    categoryThree: "Soups Salads",
    categoryFour: "View All",
    id: "6",
  },
  {
    image: "https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png",
    title: "The Gift Studio",
    categoryOne: "Celebrations with Nature's Basket",
    categoryTwo: "World Food Hampers",
    categoryThree: "Bulk Enquiry",
    categoryFour: "View All",
    id: "7",
  },
  {
    image: "https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png",
    title: "Fine Teas",
    categoryOne: "Black Teas",
    categoryTwo: "Green White Oolong Teas",
    categoryThree: "Herbal Teas Detox Benefit Blends",
    categoryFour: "View All",
    id: "8",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png",
    title: "Heart Healthy Foods",
    categoryOne: "Amaranth Couscous Quinoa",
    categoryTwo: "Flours Rice Condiments",
    categoryThree: "Seafood Lean Meats",
    categoryFour: "View All",
    id: "9",
  },
  {
    image: "https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
    title: "Indian Grocery",
    categoryOne: "Salt Sugar Substitutes",
    categoryTwo: "Cooking Spices Powders",
    categoryThree: "Oils",
    categoryFour: "View All",
    id: "10",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
    title: "Confectionary and Patisseire",
    categoryOne: "Milk Dark Mint Chocolates",
    categoryTwo: "Cakes, Brownie, Pancake & Mixes",
    categoryThree: "Ice-creams & Kulfi",
    categoryFour: "View All",
    id: "11",
  },
  {
    image:
      "https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",
    title: "International Cuisine",
    categoryOne: "Pasta",
    categoryTwo: "Rice Quinoa",
    categoryThree: "Olive Extravirgin Olive Oils",
    categoryFour: "View All",
    id: "12",
  },
];

export default function CategorySection() {
  // const [data, setData] = React.useState([]);
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
  };

  // React.useEffect(() => {
  //   GetCatData.then((res) => {
  //     console.log(res);
  //     setData(res.data);
  //   }).catch((err) => console.log(err));
  // }, []);

  return (
    <Box className="container">
      <Box className={Styles.headingCat}>
        <h2 className={Styles.headingCatText}>SHOP BY CATEGORY</h2>
      </Box>
      <Slider {...settings}>
        {data.map((el) => (
          <HomeSlickOneCard key={el.id} {...el} />
        ))}
      </Slider>
      <br />
    </Box>
  );
}

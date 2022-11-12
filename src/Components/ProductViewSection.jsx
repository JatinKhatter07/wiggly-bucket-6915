import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Styles from "../Components/ProductPage.module.css";
// import { GetWholeData } from "./Api";
import HomeSlickTwoCard from "./HomeSlickTwoCard";

const data = [
  {
    brand: "Fruit and Vegetable",
    description:
      "Try masala curry which is an amazing mix of brinjals with simmering spices cooked in gravy",
    id: "1",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/03dff5a4-7597-4057-b485-7305c85b0251_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 40,
    title: "Brinjal Small 250g",
  },
  {
    brand: "Natures Best",
    id: "2",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/999a14d9-d3ad-4d97-b637-813aeebfdf69_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 69,
    title: "CAULIFLOWER 1 PC PK NB - 1 Pc",
  },
  {
    brand: "Natures Best",
    id: "3",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6d4cd380-9b73-4092-9704-945abfe09637_425x425.JPG",
    piece: "500g",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 40,
    title: "SALAD READY TO EAT 1 PC PK NB - 1 Pc - 500g",
  },
  {
    brand: "Natures Best",
    id: "4",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fffaf60c-3245-48e9-9b59-764136106ddf_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 50,
    title: "SPROUTS MIXED PKT - 1 Pc",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "People of all regions and culinary tastes love potatoes.They have a thin skin that covers the hard flesh. It's eaten with or without its peel. It can be consumed as a roast, a mash, in fried form, etc.",
    id: "5",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/25653f6e-62fe-4e1d-9e95-9adc63305f32_425x425.JPG",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 33,
    title: "Potato - 500g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Add sage and cheddar to make an extra special and delicious onion soup",
    id: "6",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/14c3fa54-5d8e-4238-903f-a8ef58132879_425x425.JPG",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 55,
    title: "Onion 500g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Stuff tomatoes with some mixed veggies and crumbled panner and enjoy them grilled",
    id: "7",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4ecd12c-b2db-4f76-b9ea-45e0436ba350_425x425.JPG",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 38,
    title: "Tomato - 500g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Garnish any preparation with fresh grated coconut to add an unique flavor",
    id: "8",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d5fb7a3-bd07-4e2a-9045-b1bc90889dfa_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 99,
    title: "COCONUT GRATED - 1 Pc",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Capsicums are , thin smooth skinned, crunchy, mildly sweet tasting, hollow vegetables that are juicier variants of the green capsicum. They are a rich source of antioxidants, carotenoids and vitamins C, K, B6 and A. They are high in water content and dietary fibre and potassium, and are cholesterol-free.",
    id: "9",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9f5ce81b-8325-4ae3-9fad-83e2e7303198_425x425.JPG",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 30,
    title: "Capsicum - 500gm",
  },
  {
    brand: "Natures Basket",
    description:
      "Try a tongue-tickling curry of sprouted kala chana with a dash of jaggery",
    id: "10",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1365257_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 49,
    title: "SPROUTS CHANA BROWN 200G - 1 Pc",
  },
  {
    brand: "Organic India",
    description:
      "Mint is a type of herb with a refreshing flavor. It can be used dried or fresh. They have a sweet flavor with a cool after taste. It has a strong, sharp scent.",
    id: "11",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb211851-6f8f-4ea3-bfbc-3dd997af296c_425x425.jpg",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 45,
    title: "Organic Crushed Mint Leaves - 500g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Baby corn is internationally loved and used in multiple continental cuisines from European to South East Asian. It is majorly used in pizzas, pastas, noodles, stir fry, salad, rice preparations, etc. Its looks and taste are its winning attributes.",
    id: "12",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/89a7a07e-9431-478b-a46a-6ab5789ec1e1_425x425.jpg",
    piece: "200gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 50,
    title: "Baby Corn - Exotic - 200g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Add a unique taste and flavor to your soups and stews with creamy and delicious avocados.",
    id: "13",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50055a1d-84f2-456e-a5ed-5d0831376ad0_425x425.jpg",
    piece: "500 gm  |  1 kg",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 1499,
    title: "Avocado - Imported - 1 kg",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Avocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world.They have a green-skinned, fleshy body that may be pear-shaped, egg-shaped, or spherical.",
    id: "14",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50055a1d-84f2-456e-a5ed-5d0831376ad0_425x425.jpg",
    piece: "500 gm  |  1 kg",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 499,
    title: "Avocado Indian - 1 kg",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Broccoli is an edible green plant in the cabbage family, whose large flower head is used as a vegetable. The word broccoli, from the Italian plural of broccolo, refers to the flowering top of a cabbage.Broccoli is often boiled or steamed but may be eaten raw.",
    id: "15",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg",
    piece: "500gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 149,
    title: "Broccoli - Exotic - 500g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "Bright and fresh-tasting, parsley is a tasty addition to your soups and stews",
    id: "16",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/975c7187-e65d-44b5-864c-f2bfa7252865_425x425.jpg",
    piece: "50gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 200,
    title: "Parsley Curled - 50g",
  },
  {
    brand: "Fruit and Vegetable",
    description:
      "The low-caloried Zucchini is a versatile side dish that goes with everything",
    id: "17",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fa658df9-d5f4-4d5f-ab25-226fa396f65f_425x425.jpg",
    piece: "250gm",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 74,
    title: "Zucchini Yellow - Exotic - 250g",
  },
  {
    brand: "Natures Best",
    id: "18",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d51a997-87be-45f4-a85e-72d07279b3c7_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 59,
    title: "CABBAGE 1 PC PK NB - 1 Pc",
  },
  {
    brand: "Natures Best",
    description: "SUPER WHITE EGGS 10PC - 1 Pc",
    id: "19",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c5cbe169-393d-4182-8ea4-932b310ed668_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 50,
    title: "Tomato ketchup - Top Down",
  },
  {
    brand: "Natures Best",
    id: "20",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0f50c233-17c0-40a5-95dd-c8e3a4d79bae_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 50,
    title: "MUSHROOM BUTTON 1 PC PK NB - 1 Pc",
  },
  {
    brand: "Tropicana",
    fat_free: true,
    gluten_free: true,
    id: "21",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 110,
    title: "TROPICANA ORANGE JUICE 1000ML TET - 1 Pc",
  },
  {
    brand: "Tropicana",
    description:
      "Treat your taste buds to the natural goodness of guava, with the Tropicana Guava Delight. It tastes like the fresh extract of a ripe fruit, and does so without any added preservatives. This delicious fruit beverage has a rich texture that pampers your tongue. It is available in a tetra pack of 1 liter that should be stored in a refrigerator once it is opened.",
    id: "22",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cb8483ff-bf28-4193-a509-d61afce94a1a_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 100,
    title: "TROPICANA PR GUAVA NECTOR 1000ML TET - 1 Pc",
  },
  {
    brand: "Tropicana",
    description:
      "Enjoy the refreshing and appetizing taste of fresh Pomegranate Juice from renowned drink makers Tropicana. This delicious beverage provides you not only with your daily intake of vitamins but also gives you the boost and energy needed for that extra push through the day.",
    id: "23",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/064d9890-de13-44c9-82a2-ec61e4ffa23f_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 100,
    title: "TROPICANA POMEGRANATE JUICE 1000ML TET - 1 Pc",
  },
  {
    brand: "Amul",
    description:
      "Kellogg's Cereal provides you with 40 percent of your daily value of fiber intake without compromising taste.",
    id: "24",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0553e25c-3346-4547-b15d-39ebc2fabecf_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 68,
    title: "KELLOGS ALL BRAN 500g - 1 Pc",
  },
  {
    brand: "Amul",
    description:
      "Amul Gold Homogenized Standardized Milk does not contain any preservatives and the Ultra High Temperature technology ensures zero microbial activity",
    id: "25",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d0e45941-2c76-45f6-9bbf-337032995a5e_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 68,
    title: "AMUL GOLD MILK 1l - 1 Pc",
  },
  {
    brand: "Amul",
    description: "Amul Fresh Cream is made up of fresh and pure milk cream.",
    id: "26",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d30d3842-bab3-45f8-adf6-fdf237001408_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 68,
    title: "AMUL FRESH CREAM 1l - 1 Pc",
  },
  {
    brand: "Amul",
    description: "VEEBA TRULY TOMATO KETCHUP",
    id: "27",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d9df639e-54ab-457e-847f-575e2420d030_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 116,
    title: "VEEBA TRULY TOMATO KETCHUP 900G - 1 Pc",
  },
  {
    brand: "Chefs Baket",
    description: "VEEBA TRULY TOMATO KETCHUP",
    id: "28",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d77d7d31-4363-4ff3-a8e8-9df30d7bd643_425x425.jpg",
    piece: "237gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 230,
    title: "CHEFS BSKT CRMY TMTO PENNEÂ  237g - 1 Pc",
  },
  {
    brand: "The Gourmet Jar",
    id: "29",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1328671_1_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 375,
    title: "GOURMET JAR ROASTED RED PEPPER PESTO - 1 Pc",
  },
  {
    brand: "The Gourmet Jar",
    id: "30",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c12ae98-a47e-410c-b417-fd262ee7acb7_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 495,
    title: "Creamy, spicy gravy for exquisite Tikka recipes",
  },
  {
    brand: "Yummiez",
    id: "31",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/20eb2b5d-2460-4559-8592-f381f1043563_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 140,
    title: "YUMMIEZ CHCKN PLAIN SAUSAGES 250g - 1 Pc",
  },
  {
    brand: "Yummiez",
    id: "32",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ae84e458-bcef-4292-9e51-a172c78dc82a_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 180,
    title: "YUMMIEZ CHICKEN BREAKFAST SAUSAGES 500GM - 1 Pc",
  },
  {
    brand: "Yummiez",
    id: "33",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d95f1d34-90b4-4260-9ae1-805945b39ff1_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 120,
    title: "YUMMIEZ CHCKN ITALIAN SAUSAGES 250g - 1 Pc",
  },
  {
    brand: "Alf-Farms",
    description:
      "Alf-Farm’s presents Pork Oxford, a superior quality product for the high-end gourmet. This rare breed of Oxfordshire pork is moist and tender. Fresh and fine ingredients are used in its making. This mature tasting pork is flavorsome and succulent. Pan fry, bake, microwave or just have them as it is. ",
    id: "34",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fe90ec38-b799-427b-b5a6-aba89aa4723e_425x425.JPG",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 130,
    title: "Alf Farms Pork Oxford Sausages 250 Gms - 1 Pc",
  },
  {
    brand: "Alf-Farms",
    description:
      "When it comes to Chicken Hot Dogs, it is always better to have it from Alf-Farms. Alf-Farms Chicken Hot Dog is a mouth watering ready to cook item.",
    id: "35",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7e02bfeb-9e98-4085-bc15-94c752ab30f8_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 140,
    title: "Alf Farms Pork Oxford Sausages 250 Gms - 1 Pc",
  },
  {
    brand: "Alf-Farms",
    description:
      "Alf-Farms present Chicken Cheese Paprika with an amazing taste which is just like your home made foods. Alf-Farms are famous for its quality and innovative products. Chicken Cheese Paprika is something which any chicken lover would love to have.",
    id: "36",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/be35ffb9-4a0a-4669-ba0b-a369617115d6_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 170,
    title: "Alf Farms Chkn Chees Paprika Sausg 250 G - 1 Pc",
  },
  {
    brand: "Zorabian",
    description:
      "Experience a burst of flavors with each bite of Ready to Cook Chicken Shami Kebab.",
    id: "37",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/125ad1b7-e48b-44e8-b3be-b7e68f020690_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 165,
    title: "ZORABIAN CHICKEN SHAMI KEBAB 250G - 1 Pc",
  },
  {
    brand: "Zorabian",
    id: "38",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ad01ea6-98f4-478b-88f1-6e1f3323079f_425x425.JPG",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 185,
    title: "ZORABIAN CHICKEN SPRING ROLL 250G - 1 Pc",
  },
  {
    brand: "Zorabian",
    description:
      "Zorabian’s Chicken n Cheese Balls are truly delicious and healthy. These cheese balls are baked and not deep fried. To get the crispy taste of these Chicken n Cheese balls, you can also deep fry them until they are golden brown. It is available in a conveniently sized 250 gm polypack and has a shelf life of 6 months.",
    id: "39",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bbb6e9c4-b10f-4f74-bd16-329849ceb1f9_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 205,
    title: "ZORABIAN CHICKEN N CHEESE BALLS 250G - 1 Pc",
  },
  {
    brand: "L Exclusif",
    id: "40",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/248bffaa-309d-48fb-8ae6-b25bb25fd18b_425x425.JPG",
    piece: "400gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 300,
    title: "SAPPHIRE BUTTER COOKIES CHOCO CHIPS 400g - 1 Pc",
  },
  {
    brand: "L Exclusif",
    description: "BANANA WALNUT CAKE - 150 g 100% WHOLEWHEAT",
    id: "41",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4be213c-a54f-40d5-862f-3e88b372f6aa_425x425.jpg",
    piece: "150gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 155,
    title: "BANANA WALNUT CAKE - 150 g 100% WHOLEWHEAT - 1 Pc",
  },
  {
    brand: "L Exclusif",
    description: "BAGEL SESAME (PACK OF 2) 100% WHOLEWHEAT",
    id: "42",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ebf1333a-5ee3-4284-a579-91be2f6f6c02_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 130,
    title: "BAGEL SESAME (PACK OF 2) 100% WHOLEWHEAT - 1 Pc",
  },
  {
    brand: "American Garden",
    description:
      "American Garden's Reduced Calorie Mayonnaise with 3% Fat 90% less calories than American Garden's Real Mayonnaise all of the rich, creamy taste. Made with 100% certified cage-free eggs and 3.5g fat per serving, our Light mayonnaise.",
    id: "43",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bee98725-14e9-4b82-a8e8-b685becfff8b_425x425.JPG",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 130,
    title: "AG MAYONNAISE LITE 16OZ - 1 Pc",
  },
  {
    brand: "American Garden",
    id: "44",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9971ac5f-b984-41eb-b54c-11525fcbb72d_425x425.jpg",
    piece: "1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 299,
    title: "AG PEANUT BUTTER CHUNKY 12OZ - 1 Pc",
  },
  {
    brand: "Rite Bite",
    id: "45",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/01712f43-81fd-4293-b3e3-f31edea34a51_425x425.jpg",
    piece: "50gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 50,
    title: "RITE BITE EASY SLIM 50g - 1 Pc",
  },
  {
    brand: "Rite Bite",
    description:
      "Get a boost of instant energy and nutrition with this energy bar.",
    id: "46",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/59cd37f0-c541-45c3-9d93-4f84499859a3_425x425.jpg",
    piece: "50gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 60,
    title: "RITE BITE WORK OUT DAILY BAR 50g - 1 Pc",
  },
  {
    brand: "Rite Bite",
    description:
      "The ideal health bar that meets your daily protein requirements and can be had at your convenience.",
    id: "47",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b8c0679d-a83b-4a76-a11f-de97fd01e454_425x425.jpg",
    piece: "414gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 624,
    title: "RITEBITE MAX PROTACT ASRT BAR BOX 414g - 1 Pc",
  },
  {
    brand: "Baggrys",
    description:
      "Kick start your mornings with heart-healthy and wholesome Bagrry’s White Oats. Reap the benefits of our 100% wholegrain and nutrition-packed oats, which are specially processed with our innovative milling technology for a superior taste experience.",
    id: "48",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/58d6ed5c-3c1f-4003-9320-edd3ff13548c_425x425.jpg",
    piece: "250gm | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 99,
    title: "BAGRRYS WHITE OATS PUCH 500g - 1 Pc",
  },
  {
    brand: "Baggrys",
    description:
      "A suitable option for a healthy, nutritious and appetizing breakfast cereal, Bagrry's Fruit n Fiber Strawberry Muesli is rich in fiber and has no trans-fatty acids.",
    id: "49",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/26d06ce2-ffd7-491f-89ff-009689adeb45_425x425.jpg",
    piece: "1Kg | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 99,
    title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
  },
  {
    brand: "Baggrys",
    id: "50",
    image:
      "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f563fe9-e01c-4f9e-9558-0a9596c3447c_425x425.jpg",
    piece: "1Kg | 1Pc",
    popUpMess: "DELIVERY IN 80 MINUTES",
    price: 99,
    title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
  },
];

export default function ProductViewSection() {


  return (
    <Box className={Styles.productViewMainBox}>
      <Breadcrumb className={Styles.breadcrumb}>
        <BreadcrumbItem>
          <BreadcrumbLink _hover={{ color: "#bbbbbb", border: "0px" }} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            _hover={{ color: "#bbbbbb", border: "0px" }}
            href="/product"
            isCurrentPage
          >
            Fruits & Vegetables
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex alignItems="center" borderBottom="1px solid #d3d2d2" pb="5px">
        <Flex alignItems="end" gap="1rem">
          <Text className={Styles.viewHeaderOne}>FRUITS & VEGETABLES</Text>
          <Text className={Styles.viewHeaderTwo}>358 Products.</Text>
        </Flex>
        <Spacer />
        <Select border="0px" w="170px" cursor="pointer">
          <option value="Relevance">Relevance</option>
          <option value="Low to high price">Low to high price</option>
          <option value="High to low price">High to low price</option>
        </Select>
      </Flex>
      <Box className={Styles.viewHeaderLast}>
        <Text className={Styles.viewHeaderText}>Explore</Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" columnGap={-10}>
        {data.map((el) => (
          <HomeSlickTwoCard key={el.id} {...el} />
        ))}
      </Grid>
    </Box>
  );
}

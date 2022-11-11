import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";

export default function AboutSection() {
  return (
    <Box w="85%" m="auto">
      <Box pt="5">
        <Text className={Styles.aboutHeader}>Online Grocery Store India</Text>
        <Text className={Styles.aboutPara}>
          Nature’s Basket is a grocery store operating in Mumbai, Bangalore and
          Pune with deliveries to all cities across India including Hyderabad,
          Delhi, Kolkata, Chennai, Surat and more. We offer a wide range of food
          products for all your everyday needs and even offer grocery home
          delivery as well as a grocery shop online for you to purchase from.
          Our online grocery store has fresh fruits and vegetables, fresh and
          frozen meats and seafood, a wide range of breads and other packaged
          bakery products as well as a range of fresh cheeses from around the
          world. We even have a range of every staple and international cuisine
          product to meet your needs along with organic products for fresh and
          packaged food items. With our offerings, we have the best online food
          shop & online grocery shopping platform available for all your grocery
          products as well as physical grocery stores in select cities.
        </Text>
      </Box>
      <Box pt="5">
        <Text className={Styles.aboutHeader}>Best Online Grocery Supermarket India</Text>
        <Text className={Styles.aboutPara}>
          With stores in Mumbai, Pune and Bangalore and online delivery
          services, you can now have all your grocery supermarket shopping done
          online. We have a wide range of grocery products to offer at our
          stores for you to buy groceries from a channel convenient to you.
          Choose from fresh produce to packaged goods, buy groceries online and
          get them delivered straight to your doorstep, thus making it a
          convenient and quick process. You can pay for the shopping using
          credit cards, cash, coupons or online banking facility. We are sure to
          have all the grocery products for your daily dietary needs from
          regular local Indian brands and products to exotic and international
          imported ones.
        </Text>
      </Box>
      <Box pt="5" pb="5">
        <Text className={Styles.aboutHeader}>Online Grocery Supermarket Shopping India</Text>
        <Text className={Styles.aboutPara}>
          With our wide range of groceries available, Nature’s Basket is a large
          online supermarket and grocery store for all your everyday food needs.
          We offer you the best quality grocery products which you can buy
          online and have them delivered to you conveniently. We have our
          grocery stores in Mumbai, Pune and Bangalore where you can buy
          groceries and food items. We also have the best online grocery store
          to shop for fruits and vegetables, meats and seafood, breads and other
          bakery items as well as cheese and dairy. Order groceries online from
          the best quality grocery store at best prices.
        </Text>
      </Box>
    </Box>
  );
}

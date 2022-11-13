import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../App.css";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Box w={{ sm: "100%", md: "100%", lg: "85%" }} m="auto" bg="#fbfbfb" p="1rem" overflow={"scroll"}>
      <Text fontSize="11px" color="#858585" mb="10">
        Find a variety of Best Christmas gifts such as delightful Cakes,
        Chocolates, Cookies, Turkey, Stollen, Gourmet Gift Baskets, Sweets &
        Lots More Here
      </Text>
      <Flex w={{ sm: "100%", md: "100%", lg: "85%" }} m="auto" flexWrap={"wrap"}>
        <Box>
          <Text className={Styles.footerHeader}>DOWNLOAD THE APP</Text>
          <a href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
              alt="Google Play"
              className={Styles.downloadImage}
            />
          </a>
          <a href="https://apps.apple.com/in/app/natures-basket/id1013402486">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
              alt="IOS Store"
              className={Styles.downloadImage}
            />
          </a>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>About us</Text>
          <Text className={Styles.footerText}>Our Vision & Purpose</Text>
          <Text className={Styles.footerText}>Quality standards</Text>
          <Text className={Styles.footerText}>Awards</Text>
          <Text className={Styles.footerText}>FAQs</Text>
          <Text className={Styles.footerText}>Available Delivery Slot</Text>
          <Text className={Styles.footerText}>Vendor Connect</Text>
          <br />
          <Text className={Styles.footerHeader}>CAREERS</Text>
          <Text className={Styles.footerText}>Work with us</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>News & media</Text>
          <Text className={Styles.footerText}>Press releases</Text>
          <Text className={Styles.footerText}>Newsletters</Text>
          <Text className={Styles.footerText}>Events</Text>
          <Text className={Styles.footerText}>Photo gallery</Text>
          <Text className={Styles.footerText}>Recipes</Text>
          <Text className={Styles.footerText}>NBTV</Text>
          <Text className={Styles.footerText}>Our Virtual Store</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>our policies</Text>
          <Text className={Styles.footerText}>Privacy policy</Text>
          <Text className={Styles.footerText}>Payment policy</Text>
          <Text className={Styles.footerText}>Disclaimer</Text>
          <Text className={Styles.footerText}>Grievance Officer</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>sign up to stay updated</Text>
          <Input
            placeholder="ENTER YOUR EMAIL ADDRESS"
            bg="#fff"
            border="1px solid #cecdcc"
            color="#1f1e1e"
            fontSize="14px"
            padding="0 20px"
            borderRadius="0px"
            minW="250px"
            mt="20px"
          />
          <Button
            borderRadius="0px"
            bg="#99c655"
            p="8px 20px"
            border="10px none"
            mt="15px"
            color="#ffffff"
            _hover={{ bg: "#99c655", color: "#ffffff" }}
            fontSize="13px"
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Flex>
      <Box
        borderTop="1px solid #e0e0e0"
        borderBottom="1px solid #e0e0e0"
        mt="30px"
        mb="30px"
        pl="20px"
        pr="20px"
        pt="10px"
        pb="10px"
      >
        <Flex className={Styles.middleFooter}>
          <Text mr="20px" color="#111111" fontSize="14px" letterSpacing="1px">
            Payment Method
          </Text>
          <Image
            src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
            alt="Payment"
          />
          <Spacer />
          <Text mr="20px" color="#111111" fontSize="14px" letterSpacing="1px">
            Keep in touch
          </Text>
        </Flex>
      </Box>
      <Flex w="90%" m="auto" pb="1rem">
        <Box>
          <Text className={Styles.footerHeader}>Fresh & Fast</Text>
          <br />
          <Text className={Styles.footerHeader}>Gift Hampers</Text>
          <Text className={Styles.footerText}>
            Birthday & Anniversary Gift Hampers
          </Text>
          <Text className={Styles.footerText}>World Cuisine Gift Hampers</Text>
          <Text className={Styles.footerText}>
            Organic & Health Gift Hampers
          </Text>
          <Text className={Styles.footerText}>Coffee & Tea Gift Hampers</Text>
          <Text className={Styles.footerText}>Get Well Soon Gift Hampers</Text>
          <Text className={Styles.footerText}>Cheese & Meat Platters</Text>
          <br />
          <Text className={Styles.footerHeader}>Fruits & Vegetables</Text>
          <Text className={Styles.footerText}>Vegetables</Text>
          <Text className={Styles.footerText}>Exotic Vegetables</Text>
          <Text className={Styles.footerText}>Fruits</Text>
          <Text className={Styles.footerText}>Organic Fruits & Vegetables</Text>
          <Text className={Styles.footerText}>Exotic Fruits</Text>
          <Text className={Styles.footerText}>Canned & Frozen</Text>
          <Text className={Styles.footerText}>Cold - Pressed Fresh Juices</Text>
          <br />
          <Text className={Styles.footerHeader}>Delicatessen & Cheese</Text>
          <Text className={Styles.footerText}>Fresh Snacks & Party Food</Text>
          <Text className={Styles.footerText}>Antipasti</Text>
          <Text className={Styles.footerText}>Gourmet Cheese Shop</Text>
          <Text className={Styles.footerText}>Cold Cuts & Sausages</Text>
          <Text className={Styles.footerText}>
            Cheese Spread, Slices & Others
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>International Cuisine</Text>
          <Text className={Styles.footerText}>Italian & Continental</Text>
          <Text className={Styles.footerText}>Middle-Eastern</Text>
          <Text className={Styles.footerText}>Condiments</Text>
          <Text className={Styles.footerText}>Coffee & Tea Gift Hampers</Text>
          <Text className={Styles.footerText}>Flours, Grains & More</Text>
          <Text className={Styles.footerText}>Mexican</Text>
          <Text className={Styles.footerText}>Salad Dressing</Text>
          <Text className={Styles.footerText}>Vinegars & Mustards</Text>
          <Text className={Styles.footerText}>Salt, Sugar & Substitutes</Text>
          <Text className={Styles.footerText}>Pan-Asian</Text>
          <Text className={Styles.footerText}>Baking Ingredients</Text>
          <Text className={Styles.footerText}>Oils</Text>
          <Text className={Styles.footerText}>Soups</Text>
          <br />
          <Text className={Styles.footerHeader}>health</Text>
          <Text className={Styles.footerText}>Weight Management Foods</Text>
          <Text className={Styles.footerText}>Heart - Healthy Foods</Text>
          <Text className={Styles.footerText}>
            Wellness & Immunity Boosters
          </Text>
          <Text className={Styles.footerText}>Diabetic - Friendly Foods</Text>
          <Text className={Styles.footerText}>Problem Solution Foods</Text>
          <Text className={Styles.footerText}>Organic</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>
            Confectionary & Patisserie
          </Text>
          <Text className={Styles.footerText}>Chocolates</Text>
          <Text className={Styles.footerText}>
            Dessert Mixes, Sauces & Toppings
          </Text>
          <Text className={Styles.footerText}>Ice Creams & Desserts</Text>
          <Text className={Styles.footerText}>Confectionery</Text>
          <Text className={Styles.footerText}>Baking Ingredients</Text>
          <Text className={Styles.footerText}>Patisserie</Text>
          <br />
          <Text className={Styles.footerHeader}>Meats, Seafood and Eggs</Text>
          <Text className={Styles.footerText}>Fresh Meats & Seafood</Text>
          <Text className={Styles.footerText}>Cold Cuts & Sausages</Text>
          <Text className={Styles.footerText}>Packaged Sea food & Meats</Text>
          <Text className={Styles.footerText}>Eggs</Text>
          <Text className={Styles.footerText}>Frozen</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>Breakfast & Dairy</Text>
          <Text className={Styles.footerText}>Cereals, Bars & Others</Text>
          <Text className={Styles.footerText}>Jams, Preserves & Conserves</Text>
          <Text className={Styles.footerText}>Honey</Text>
          <Text className={Styles.footerText}>Indian Breakfast Favourites</Text>
          <Text className={Styles.footerText}>Spreads</Text>
          <Text className={Styles.footerText}>
            Milk, Yogurt & Other Dairy Drinks
          </Text>
          <Text className={Styles.footerText}>Butters & Margarines</Text>
          <Text className={Styles.footerText}>Bakery</Text>
          <br />
          <Text className={Styles.footerHeader}>Instant Meal & Aids</Text>
          <Text className={Styles.footerText}>Ready to Cook</Text>
          <Text className={Styles.footerText}>Ready to Eat</Text>
          <Text className={Styles.footerText}>Accessories</Text>
          <Text className={Styles.footerText}>Books</Text>
        </Box>
        <Spacer />
        <Box>
          <Text className={Styles.footerHeader}>Snacks & Beverages</Text>
          <Text className={Styles.footerText}>Cookies & Crackers</Text>
          <Text className={Styles.footerText}>Frozen Snacks</Text>
          <Text className={Styles.footerText}>Antipasti</Text>
          <Text className={Styles.footerText}>Dry Snacks</Text>
          <Text className={Styles.footerText}>Fresh Snacks & Party Food</Text>
          <Text className={Styles.footerText}>Relishes & Pickles</Text>
          <Text className={Styles.footerText}>Carbonated Drinks</Text>
          <Text className={Styles.footerText}>Teas</Text>
          <Text className={Styles.footerText}>Concentrate</Text>
          <Text className={Styles.footerText}>
            Energy Drinks & Milk Additives
          </Text>
          <Text className={Styles.footerText}>Juice</Text>
          <Text className={Styles.footerText}>Coffee</Text>
          <Text className={Styles.footerText}>Dairy Drinks</Text>
          <Text className={Styles.footerText}>Water</Text>
          <br />
          <Text className={Styles.footerHeader}>Indian Grocery</Text>
          <Text className={Styles.footerText}>Flours, Grains & More</Text>
          <Text className={Styles.footerText}>Cooking Pastes & Sauces</Text>
          <Text className={Styles.footerText}>Cooking Spices & Powders</Text>
          <Text className={Styles.footerText}>Salt, Sugar & Substitutes</Text>
          <Text className={Styles.footerText}>Oils</Text>
        </Box>
      </Flex>
      <Box borderTop="1px solid #e0e0e0">
        <Flex w="95%" m="auto" pb="1rem" pt="1rem">
          <Text className={Styles.lightFooterEnd}>
            © 2020 Natures Basket Limited. All rights reserved.
          </Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.darkFooterEnd}>Privacy Policy</Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.darkFooterEnd}>Terms of Use</Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.lightFooterEnd}>
            Home Delivery Number - 8880077745
          </Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.darkFooterEnd}>Site Map</Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.darkFooterEnd}>Mobile Site</Text>
          <Text className={Styles.lightFooterEnd}>|</Text>
          <Text className={Styles.lightFooterEnd}>
            FSSAI License Number - 11519002000496
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

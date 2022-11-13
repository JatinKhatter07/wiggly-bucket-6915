import { Box, Image, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Styles from "../Components/ProductPage.module.css";
import ProductFilterSection from "../Components/ProductFilterSection";
import ProductViewSection from "../Components/ProductViewSection";

export default function ProductPage() {
  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box w="85%" m="auto">
        <Image
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png"
          alt="Product Image 1"
          className={Styles.productImageOne}
        />
        
          <ProductViewSection />
        
      </Box>
      <Footer />
    </Box>
  );
}
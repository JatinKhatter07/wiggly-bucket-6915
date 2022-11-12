import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Styles from "../Components/Homepage.module.css";
import Styles2 from "../Components/ProductPage.module.css";
import { CartDataAdd } from "../Components/Api";

export default function SingleProduct() {
  const [data, setData] = useState({});
  const params = useParams();

  const getData = () => {
    // fetch(
    //   `https://harshal-json-mock-server.herokuapp.com/natureBasket/${params.id}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));

    let dt = JSON.parse(localStorage.getItem("adddt"))
    console.log("dt",dt)
    setData(dt)
  };

  useEffect(() => {
    getData();
  }, []);

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
      <Box w="85%" m="auto" mt="1rem" mb="1rem">
        <Breadcrumb className={Styles.breadcrumb} color="#bbbbbb">
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{ color: "#bbbbbb", border: "0px" }}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{ color: "#bbbbbb", border: "0px" }}
              href="/product"
            >
              Fruits & Vegetables
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{ color: "#bbbbbb", border: "0px" }}
              href={`/product/${data.id}`}
              isCurrentPage
            >
              {data.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex mt="1rem" mb="1rem" gap="8rem">
          <Image
            src={data.img}
            alt={data.title}
            className={Styles2.singleImage}
          />
          <Box>
            <Text className={Styles2.singleTitle}>{data.title}</Text>
            <Flex pt="5px" pb="5px" alignItems="center" gap="0.5rem">
              <Text fontSize="14px">Share</Text>
              <span>
                <Image
                  src="https://www.naturesbasket.co.in/Images/product-detail-social.jpg"
                  alt="Social"
                />
              </span>
            </Flex>
            <Text className={Styles2.singleDescription}>
              {data.des1}
            </Text>
            <Text className={Styles2.singlePiece}>Size: {data.qty}</Text>
            <Flex alignItems="center" gap="10px">
              <Button
                className={Styles.slickCardTwoButtonOne}
                bg="whiteAlpha.900"
                _hover={{ background: "whiteAlpha.900" }}
                fontSize="14px"
              >
                MRP ₹ {data.price}
              </Button>
              <Button
                className={Styles.slickCardTwoButtonTwo}
                leftIcon={<i class="fa-solid fa-cart-plus"></i>}
                bg="rgb(123, 205, 0)"
                _hover={{ background: "rgb(123, 205, 0)" }}
                fontSize="14px"
                onClick={() => {
                  CartDataAdd({ ...data, qty: 1, aPrice: data.price });
                  alert("Item added to cart");
                }}
              >
                ADD
              </Button>
            </Flex>
            <Text className={Styles2.singleTaxes}>
              (Inclusive of all taxes)
            </Text>
            <Text className={Styles2.singleKnowMore}>Know More</Text>
            <Text className={Styles2.singleDescription} pt="0px">
              {data.description}
            </Text>
          </Box>
        </Flex>
        <Text className={Styles.slickCardTwoPopup} w="220px" ml="0px">
          {data.popUpMess}
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}

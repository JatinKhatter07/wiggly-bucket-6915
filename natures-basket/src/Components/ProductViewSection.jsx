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
import { useState, useEffect } from "react";
import Styles from "../Components/ProductPage.module.css";
// import { GetWholeData } from "./Api";
import HomeSlickTwoCard from "./HomeSlickTwoCard";
import ProductFilterSection from "./ProductFilterSection";

const productone = [
  {
      id:1,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f7eb0f83-c578-4f72-a181-7e54094f0193_425x425.jpg",
      title: "BLUEBERRIES COMBO",
      des1: "BLUEBERRIES COMBO",
      des2: "",
      qty: "1 Pc",
      price: 629,
      category: "fruits"
  },
  {
      id:2,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/70726a6d-f35e-480c-ba42-c95e808e3ec1_425x425.jpg",
      title: "Apple Red Delicious - Washington",
      des1: "Product of : USA.",
      des2: "When it comes to apples, our mind remembers Washington automatically. Enjoy every bite of this All time favourite apples of the world.",
      qty: "500 g",
      price: 224.5,
      category: "fruits"
  }, 
  {   
      id:3,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f341c972-bc85-4b0d-8309-6bdaa4fd0cad_425x425.JPG",
      title: "Grapes Red Globe - Imported",
      des1: "Product of : USA.",
      des2: "Red Globe grapes are mildly sweet and flavourful. They are not as tangy as Flame seedless",
      qty: "200 g",
      price: 99.8,
      category: "fruits"
  },
  {   id:4,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/620b0bb1-440e-4d83-896a-35bc6f274c3c_425x425.jpg",
      title: "Apple Fuji",
      des1: "Product of : USA.",
      des2: "A distinctive, honey sweet taste and a juicy texture makes this apple delectable",
      qty: "500 g",
      price: 214.5,
      category: "fruits"
  },
  {   id:5,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d2f0e000-0d5f-4153-a8c7-caddb93bb9eb_425x425.jpg",
      title: "FRESHCON SHREDDED COCONUT 100G",
      des1: "Product of : INDIA.",
      des2: "",
      qty: "1 Pc",
      price: 40,
      category: "fatfree"
  },
  {   id:6,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b8473f37-a863-4a02-8bc5-81c523f5290e_425x425.jpg",
      title: "YUMMIEZ GREEN PEAS 500g",
      des1: "Product of : INDIA.",
      des2: "",
      qty: "1 Pc",
      price: 125,
      category: "fatfree"
  },
  {   
      id:7,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8ddeaf63-7d49-4498-bfd8-2dc80e3df458_425x425.JPG",
      title: "Nectarine - Imported",
      des1: "Product of : Spain.",
      des2: "Juicy nectarine has a delicious flavor that can be relished as is or in desserts",
      qty: "1 kg",
      price: 2199,
      category: "fruits"
  },
  {  
      id:8,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/52f5fdaa-c9c5-4026-bf57-5e2bf06c24cf_425x425.JPG",
      title: "Orange",
      des1: "Product of : INDIA.",
      des2: "Full of soluble fiber, tangy, juicy oranges are helpful in lowering cholesterol",
      qty: "1 kg",
      price: 129,
      category: "fruits"
  },
  {   
      id:9,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e052813e-041b-44ee-b255-b7356c6af4ac_425x425.JPG",
      title: "Green Peas",
      des1: "Product of : INDIA.",
      des2: "Sweet, delicious, and cutely round, green peas are also called garden peas.",
      qty: "1 kg",
      price: 359,
      category:"vegitable"
  },
  {   
      id:10,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ced65f9e-c6b2-41fc-9662-7c5a564e5c2b_425x425.jpg",
      title: "Apple New Zealand Rose",
      des1: "Product of : New Zealand/USA.",
      des2: "Here's the pefect rich and pulpy apples which are developed and bred in New Zealand",
      qty: "1 kg",
      price: 214.5,
      category: "fruits"
  },
  {  
      id:11,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/63b69966-4855-4b1f-80a2-74796c8a5e09_425x425.JPG",
      title: "Custard Apple",
      des1: "Product of : INDIA.",
      des2: "A popular fruit, the custard apple is much loved globally for its unique shape and sweet taste.",
      qty: "1 kg",
      price: 74.75,
      category: "fruits"
  },
  {

      id:12,    
      img: "https://d1z88p83zuviay.cloudfront.net/Images/no-images425x425.jpg",
      title: "PEARS BEAUTY IMPORTED",
      des1: "PEARS BEAUTY IMPORTED",
      des2: "",
      qty: "1 kg",
      price: 189.5,
      category:"vegitable"
  },
  {
      id:13,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7fb83bef-4c1c-4f81-96e6-44c4d3eac077_425x425.jpg",
      title: "Apple Royal Gala - New Zealand",
      des1: "Product of : New Zealand/USA.",
      des2: "Royal Gala was developed in New Zealand and is a red sport of the Gala variety.",
      qty: "1 kg",
      price: 174.5,
      category: "fruits"
  },
  {   id:14,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c952f42a-21b8-4271-98ba-58e0afdd47bb_425x425.jpg",
      title: "PEARS PACKHAM IMPORTED",
      des1: "PEARS PACKHAM",
      des2: "",
      qty: "1 kg",
      price: 299,
      category: "fruits"
  },
  {
      id:15,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb35012c-ed68-4553-af94-b44c35ed8586_425x425.jpg",
      title: "Apple Green",
      des1: "Product of : New Zealand/USA.",
      des2: "The compound quercitin, a major component in green apple peels, helps to lower sugar levels and manage type-2 diabetes mellitus. ",
      qty: "1 kg",
      price: 199.5,
      category: "fruits"
  },
  {
      id:16,
      img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6fe7cc7b-c825-4126-90da-1c631719940c_425x425.JPG",
      title: "NB SPINACH 200G",
      des1: "Product of : INDIA",
      des2: "",
      qty: "1 Pc",
      price: 55,
      category:"vegitable"
  }


]

export default function ProductViewSection() {

 const [data, setData] = useState([])

 useEffect(()=>{
  setData(productone)
 },[])

 const handlefilter = ()=>{
  const x =  productone.filter((el)=>{
    return  el.category==="fruits"
  })
  console.log("x",x)
  setData(x)
}
const handlefilterveg = ()=>{
const x =  productone.filter((el)=>{
  return  el.category==="vegitable"
})
console.log("x",x)
setData(x)
}

const handlefilterfat = ()=>{
const x =  productone.filter((el)=>{
  return  el.category==="fatfree"
})
console.log("x",x)
setData(x)
}


  return (
    <Box>
      <Flex mt="20px" mb="20px">
      <ProductFilterSection handlefilter={handlefilter} handlefilterveg={handlefilterveg} handlefilterfat={handlefilterfat} />
      <Spacer />
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
    </Flex>
    </Box>
  );
}

import { Box, Divider, Flex, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { MyFilter } from '../components/MyFilter'
import Products from '../components/Products'
import {productone} from "../images/product"
import {useState, useEffect} from "react"
export const ProductOne = () => {

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
    <Box width="95%" mx="auto">
     <center > <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png" borderRadius="20px" my="30px" /> </center>
<Flex h="700px">
<GridItem height="800px" width="300px" border="1px solid #CCCCCC" >
  <MyFilter handlefilter={handlefilter} handlefilterveg={handlefilterveg} handlefilterfat={handlefilterfat}/>
  
</GridItem>
<Box pl="20px">
<Flex color="#C1BBBB"> Home <Image src="https://d1z88p83zuviay.cloudfront.net/Images/arrow-right-small.png" height="10px" mt="10px" /> Fruits & Vegitables</Flex>
<Flex><Box fontSize="30px">FRUITS & VEGETABLES</Box> <Text color="#C1BBBB" fontSize="20px" ml="25px"> 340 Products.</Text></Flex>
<Divider />
<Text color="#C1BBBB" fontSize="25px" textAlign="left">Explore</Text>
<SimpleGrid columns={4} spacing={5} mr="2px" w="auto">
  
{data.map((el)=>
<Box height='500px' w="280px" mr="2px">
 <Products item={el}/>
</Box>
)}

</SimpleGrid>
</Box>
</Flex>
        
    </Box>
  )
}

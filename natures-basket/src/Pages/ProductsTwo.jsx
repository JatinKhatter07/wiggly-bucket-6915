import { Box, Divider, Flex, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import {producttwo} from "../images/product"
import {useState, useEffect} from "react"
import { MyFilter } from '../components/MyFilter'
import Products from '../components/Products'

export const ProductsTwo = () => {
    const [data, setData] = useState([])

    useEffect(() =>{
        setData(producttwo)
    },[])
  return (
    <Box width="95%" mx="auto">
     <center > <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_21_Platter.png" borderRadius="20px" my="30px" /> </center>
<Flex h="700px">
<GridItem height="800px" width="300px" border="1px solid #CCCCCC" >
  <MyFilter />
  
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

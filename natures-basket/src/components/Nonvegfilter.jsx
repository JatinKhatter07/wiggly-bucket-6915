import { Box, Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {productone} from "../images/product"

export const Nonvegfilter = ({handlefilter,handlefilterveg,handlefilterfat}) => {

return (
    <Box>
    <Box border="1px solid #cccccc">
        <Flex>
            <Text fontSize="25px" pl="10px" color="#555B5F">FILTER</Text>
            <Spacer />
            <Text fontSize="sm" pr="10px" mt="10px">CLEAR ALL</Text>
        </Flex>
        </Box>
        <Box border="1px solid #cccccc" height="200px" overflow="scroll" 
        // sx={{
        //     '::-webkit-scrollbar':{display:'none'}
        // }}
        >
            <Box  mt="8px"
        textAlign="left" px={4} py={2} rounded={'md'}  border="2px solid #cccccc" >
            Fruits & Vegetables  
            </Box>
        <Button 
        border="2px solid #B61671" onClick={handlefilter}
         mt="8px"
         w="100%"
         bg="white"
         justifyContent="flex-start" py={2} color="#B61688" rounded={'md'}>
        Fruits
        </Button>
        <Button border="2px solid #B61671" mt="8px" justifyContent="flex-start" 
         w="100%"
         bg="white"
         px={4} py={2}
        color="#B61688" rounded={'md'}>
        Exotic Fruits
        </Button>
        <Button border="2px solid #B61671"
        onClick={handlefilterveg}
        w="100%"
        bg="white"
        justifyContent="flex-start" mt="8px" textAlign="left" px={4} py={2} color="#B61688" rounded={'md'}>
        Daily Vegetables
        </Button>
        <Button border="2px solid #B61671" mt="8px" 
        justifyContent="flex-start" 
        w="100%"
        bg="white"
        px={4} py={2} color="#B61688" rounded={'md'}>
        Exotic Vegetables
        </Button>
        </Box>
        <Box border="2px solid #cccccc" mt="8px" height="200px" textAlign="left" py={2} rounded={'md'}
        overflow="scroll">
            <Box pl={4}>
            Brands
            </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        <Checkbox onChange={handlefilterfat}>Fat Free</Checkbox>
        
        </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        Gluten Free
        </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        Heart Healthy
        </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        Lactose Free
        </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        Organic
        </Box>
        <Box border="2px solid #B61671" mt="8px" textAlign="left" px={4} py={1} color="#B61688" rounded={'md'}>
        vegetarian
        </Box>
        </Box>
        
        </Box>
  )
}

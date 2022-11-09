import React from 'react'
import { Box, Center, HStack, Image, } from '@chakra-ui/react'

const FlexImages = () => {
  return (
    <div>
        <Center>
            <HStack spacing='3%' w="80%">
                <Box w="30%" >
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src='https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8' alt="firstImg"/>
                </Box>
                <Box w="30%">
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src="https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17" alt="secondImg"/>
                </Box>
                <Box w="30%">
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src='https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15' alt='third'/>
                </Box>
            </HStack>
        </Center>
    </div>
  )
}

export default FlexImages
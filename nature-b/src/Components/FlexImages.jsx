import React from 'react'
import { Box, Center, HStack, Image, } from '@chakra-ui/react'

const FlexImages = (GiftObj) => {
  return (
    <div>
        <Center>
<HStack spacing='3%' w={"80%"} >
                <Box w="30%" >
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src={GiftObj.img1} alt="firstImg"/>
                </Box>
                <Box w="30%">
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src={GiftObj.img2} alt="secondImg"/>
                </Box>
                <Box w="30%">
                    <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd" }} src={GiftObj.img3} alt='third'/>
                </Box>
            </HStack>
        </Center>
    </div>
  )
}

export default FlexImages
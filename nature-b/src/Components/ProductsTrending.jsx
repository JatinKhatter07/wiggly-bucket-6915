import { Box, Button, Center, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import Example from "./IconEx"

const ProductsTrending = (obj1) => {
    
  return (
    <div>
        <Center>
        <HStack spacing='30px' w={["80%"]} overflow={["scroll"]}>
            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
                <Image  src={obj1.img1} alt='prod1' p={5}/>
                <a href="#" style={{color:"#880033"}}>HA TAPIOCA FLOUR 400g</a>
                <Box>1Pc</Box>
                <span>MRP ₹210</span>
                <Button pr={3} bg={"#92BE4D"} ml={5}>
                <Example/>
                    ADD
                </Button>
            </Box>
            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Image src={obj1.img2} alt='prod2'  p={5}/>
                <a href="#" style={{color:"#880033"}}>Kwality Wall's Ice Cream - Magnum C..</a>
                <Box>1Pc</Box>
                <span>MRP ₹210</span>
                <Button pr={3} bg={"#92BE4D"} ml={5}>
                <Example/>
                    ADD
                </Button>
            </Box>
            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Image src={obj1.img3} alt='prod3'  p={5}/>
                <a href="#" style={{color:"#880033"}}>HA ORGANIC MOONG DAL YELLOW</a>
                <Box>1Pc</Box>
                <span>MRP ₹210</span>
                <Button pr={3} bg={"#92BE4D"} ml={5}>
                <Example/>
                    ADD
                </Button>
                </Box>
            <Box boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Image src={obj1.img4} alt='prod4'  p={5}/>
                <a href="#" style={{color:"#880033"}}>HA TAPIOCA FLOUR 400G</a>
                <Box>1Pc</Box>
                <span>MRP ₹210</span>
                <Button pr={3} bg={"#92BE4D"} ml={5}>
                <Example/>
                    ADD
                </Button>
            </Box>
        </HStack>
        </Center>
    </div>
  )
}

export default ProductsTrending
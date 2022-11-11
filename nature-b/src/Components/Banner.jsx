import React from 'react'
import { Box, Image, Center } from '@chakra-ui/react'


const Banner = () => {
  return (
    <Center>
        <Box w='90%' textAlign="center" p={4}>
                <Image style={{borderRadius:"10px"}} src='https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=14' alt='Dan Abramov' w={"100%"} />
        </Box>
    </Center>

   
  )
}

export default Banner
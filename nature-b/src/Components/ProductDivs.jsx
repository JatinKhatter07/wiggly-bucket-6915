import { Box, Center, Flex, Heading, HStack, Image, List, ListIcon, ListItem, Spacer } from '@chakra-ui/react'
import {ChevronRightIcon  } from '@chakra-ui/icons'
import React from 'react'

const ProductDivs = (obj1) => {
    console.log(obj1)
  return (
    <Center>
        <HStack spacing='auto' w="80%" >
            <Box w="24%" height={"500px"} >
                <Image style={{borderRadius:"10px", boxShadow: "2px 5px #a09191bd" }} src={obj1.img1.imgurl} alt="firstImg"  width={"100%"}/>
                <Heading style={{textAlign:"left",fontWeight:"600",fontSize:'13px'}} p={3}>{obj1.img1.title}</Heading>
                <Box textAlign={"left"} p={1} fontSize={[8,10,13]}>
                    <List spacing={3}>
                        <ListItem >
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img1.li1}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                            
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img1.li2}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img1.li3}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img1.li4}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        
                        
                    </List>
                </Box>
            </Box>
            <Box w="24%" height={"500px"}>
                <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd"}} src={obj1.img2.imgurl} alt="secondImg"  width={"100%"}/>
                <Heading style={{textAlign:"left",fontWeight:"600",fontSize:'13px'}} p={3}>{obj1.img2.title}</Heading>
                <Box textAlign={"left"} p={1} fontSize={[8,10,13]}>
                    <List spacing={3}>
                        <ListItem >
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img2.li1}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                            
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img2.li2}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img2.li3}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img2.li4}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                    </List>
                </Box>

            </Box>
            <Box w="24%" height={"500px"}>
                <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd"}} src={obj1.img3.imgurl} alt='third'  width={"100%"}/>
                <Heading style={{textAlign:"left",fontWeight:"600",fontSize:'13px'}} p={3}>{obj1.img3.title}</Heading>
                <Box textAlign={"left"} p={1} fontSize={[8,10,13]}>
                    <List spacing={3}>
                        <ListItem >
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img3.li1}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                            
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img3.li2}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img3.li3}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img3.li4}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                    </List>
                </Box>

            </Box>
            <Box w="24%" height={"500px"}>
                <Image style={{borderRadius:"10px",boxShadow: "2px 5px #a09191bd"}} src={obj1.img4.imgurl} alt='four'  width={"100%"}/>
                <Heading style={{textAlign:"left",fontWeight:"600",fontSize:'13px'}} p={3}>{obj1.img4.title}</Heading>
                <Box textAlign={"left"} p={1}fontSize={[8,10,13]}>
                    <List spacing={3}>
                        <ListItem >
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img4.li1}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                            
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img4.li2}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img4.li3}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                        <Flex>
                            <Box p='4' >
                            <a href="#">{obj1.img4.li4}</a>
                            </Box>
                            <Spacer />
                            <Box p='4' >
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            </Box>
                        </Flex>
                        </ListItem>
                    </List>
                </Box>

            </Box>
        </HStack>
    </Center>
  )
}

export default ProductDivs
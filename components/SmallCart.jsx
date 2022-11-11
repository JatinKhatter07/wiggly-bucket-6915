import {
    Box,
    Button,
    Center,
    HStack,
    Image,
    Spacer,
    Text
  } from "@chakra-ui/react";
  
  import axios from "axios";
  import { useContext, useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../Context/ContextApi";
  
  export default function SmallCart({ small, setSmall }) {
    const { auth } = useContext(AuthContext);
    const [buyData, setBuyData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      getData();
    }, [small]);
  
    const getData = () => {
      axios
        .get("https://c4-project-data.herokuapp.com/buy")
        .then((res) => setBuyData(res.data))
        .catch((e) => console.log(e));
    };
  
    const handleDelete = (id) => {
      axios
        .delete(`https://c4-project-data.herokuapp.com/buy/${id}`)
        .then((res) => {
          getData();
        })
        .catch((e) => console.log(e));
    };
  
    const goGift = () => {
      navigate("/gifting");
    };
  
    return (
      <Box
        w="45%"
        cursor="pointer"
        position="fixed"
        top={["95px", "72px"]}
        right={["30px", "113px"]}
        bgColor="white"
        border="2px solid #4CA642"
        fontFamily="CeraPRO-light"
        display={small ? "block" : "none"}
        onMouseEnter={() => setSmall(true)}
        onMouseLeave={() => setSmall(false)}
      >
        {auth ? (
          <Box>
            {buyData.length ? (
              <Box p="30px 60px">
                <Text color="yellowgreen" fontSize="30px" fontWeight="bold">
                  Welcome to your Cart
                </Text>
                <HStack
                  p="8px 0px"
                  borderBottom="2px solid green"
                  textAlign="left"
                  mt="15px"
                >
                  <Text w="40%">Name</Text>
                  <Spacer />
                  <Text w="8%">Price</Text>
                  <Text w="12%">Discount</Text>
                  <Text w="12%">Quantity</Text>
                  <Text w="15%"></Text>
                </HStack>
                <Box overflow="auto">
                  {buyData.map((ele) => (
                    <Box key={ele.id}>
                      <Box
                        p="8px"
                        textAlign="left"
                        borderBottom="1px solid #938D8D"
                      >
                        <Text fontWeight="bold">{ele.title}</Text>
                      </Box>
                      <HStack
                        m="10px 0px"
                        bgColor="#FAD9D9"
                        p="8px"
                        textAlign="left"
                      >
                        <Box display="flex" w="50%">
                          <Image
                            mr="10px"
                            h="50px"
                            w="50px"
                            p="0 0 0 6px"
                            src={ele.image}
                          />
                          <Text>{ele.name}</Text>
                        </Box>
                        <Text w="12%">₹ {ele.price}</Text>
                        <Text w="12%">{ele.dis}</Text>
                        <Text w="12%">{ele.qty}</Text>
                        <Button
                          colorScheme="red"
                          variant="solid"
                          onClick={() => {
                            handleDelete(ele.id);
                          }}
                        >
                          DELETE
                        </Button>
                      </HStack>
                    </Box>
                  ))}
                  <Button
                        variant="none"
                        w={["100%", "60%"]}
                        m="auto"
                        color="white"
                        bgColor="#65D43D"
                        p="10px 50px"
                        onClick={goGift}
                      >
                        Continue Shoping
                      </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Center>
                  <Image
                    mt="50px"
                    src="https://d1z88p83zuviay.cloudfront.net/Images/Icon-no-cart.png"
                  />
                </Center>
                <Text
                  mt="25px"
                  mb="10px"
                  fontSize={["20px", "32px"]}
                  color="blackAlpha.900"
                  letterSpacing="1px"
                >
                  No Products Added to your Cart
                </Text>
                <Button
                  variant="none"
                  w={["100%", "60%"]}
                  m="auto"
                  color="white"
                  bgColor="#65D43D"
                  p="10px 50px"
                  onClick={goGift}
                >
                  Continue Shoping
                </Button>
                <Box
                  mt="26px"
                  p="10px"
                  fontWeight="bold"
                  color="#E54E9F"
                  borderTop="1px solid #A3A8A1"
                >
                  HAND PICK OFEER JUST FOR YOU
                </Box>
              </Box>
            )}
          </Box>
        ) : (
          <Box>
            <Text fontSize="30px" mt="50px" mb="20px">
              Please Log-in First
            </Text>
            <Button
              variant="none"
              w={["100%", "60%"]}
              m="auto"
              color="white"
              bgColor="#65D43D"
              p="10px 50px"
              mb="40px"
              onClick={goGift}
            >
              Continue Shoping
            </Button>
          </Box>
        )}
      </Box>
    );
  }
  
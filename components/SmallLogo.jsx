import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function SmallLogo() {
  const [message, setMessage] = useState(false);
  return (
    <Box
      // h="90px"
      // w="300px"
      // cursor="pointer"
      // position="fixed"
      // bottom="130px"
      // right="20px"
      className="logo"
    >
      <Box
        fontSize="14px"
        fontFamily="CeraPRO"
        lineHeight="18px"
        textAlign="left"
        w="300px"
        h="87px"
      >
        <Box
          backgroundColor="white"
          borderRadius="5px"
          p="15px 10px"
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          display={message ? "block" : "none"}
        >
          <Text fontWeight="bold" mb="5px">
            Taste The World
          </Text>
          <Text>Order now for a convenient grocery Shopping Experience</Text>
        </Box>
      </Box>
      <HStack mt="5px">
        <Spacer />
        <Image
          onMouseEnter={() => setMessage(true)}
          onMouseLeave={() => setMessage(false)}
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          h="60px"
          w="60px"
          borderRadius="50%"
          src="https://cdn.yellowmessenger.com/oHDdzDYOR1681619179568411.png"
        />
      </HStack>
    </Box>
  );
}

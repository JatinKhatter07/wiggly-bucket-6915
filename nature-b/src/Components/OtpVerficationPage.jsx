import { Box, Button, Center, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'




function OtpVerf() {
    const [pin,setpin] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleSubmit=()=>{
        if(pin==="1234"){
            const name = prompt("Enter Your Name")
            alert(`${name},Your are successfully Logged In`);  
        }
        else{
            alert("Incorrect OTP");
        }
    }
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="green">ENTER OTP</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Your OTP Sent To Mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <h1 style={{textAlign:"center",padding:"5px"}}>THANK YOU FOR SHOWING INTEREST.</h1>
            <hr />
            <h1 style={{textAlign:"center",padding:"10px"}}>We have sent OTP via SMS on your mobile number.</h1>
            <Center>
                <Box style={{textAlign:"center",padding:"10px"}}>
                    <HStack>
                        <PinInput onChange={value=>setpin(value)}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </Box>
                
            </Center>
            <p style={{color:"#880033"}}>Didn't received OTP? Resend OTP</p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={()=>{handleSubmit()}}>
                SUBMIT
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default OtpVerf;
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import OtpVerf from './OtpVerficationPage'

function RegistrationWindow() {
  const [value, setValue] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  const handleChange = (event) => setValue(event.target.value)
  
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      

      <Modal
        initialFocusRef={initialRef}
        
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalOverlay />
        <ModalContent  >
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <h1 style={{textAlign:"center",padding:"2px"}}>ENTER YOUR 10 DIGIT MOBILE NUMBER</h1>
            <hr />
            <br />
            <Input placeholder='ENTER PHONE NUMBER' style={{backgroundColor:"#E8FOFE"}} maxLength="10"  value={value} onChange={handleChange}/>
            <h1 style={{textAlign:"center",padding:"2px", color:"#880033"}}>By continuing, you agree to our <strong> Refund, Terms and Policies</strong></h1>
            <h1>{value}</h1>
          </ModalBody>

          <ModalFooter>
            {value.length==10?<div ><OtpVerf/></div>:<Button colorScheme={"red"}>Enter valid 10 Phone Number</Button>}
            <Button onClick={onClose}>Cancel </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RegistrationWindow;
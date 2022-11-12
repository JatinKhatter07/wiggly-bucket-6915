import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import PayCart from "../Components/PayCart";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form>
        <Flex w="85%" m="auto" columnGap="50">
          <Box w="60%" mt="5">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/cart">
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Payment</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box mt="5" border="1px solid lightgrey" p="10px">
              <Text fontWeight="semibold" ml="40%">
                Checkout Options
              </Text>
              <Image
                src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
                alt="Payment"
                w="100%"
              />
            </Box>
            <Box w="48%" mt="10">
              <hr />
            </Box>
            <Text ml="49%" mt="-3">
              OR
            </Text>
            <Box w="47%" ml="53%" mt="-2">
              <hr />
            </Box>
            <Flex>
              <Box p="4">
                <Text fontWeight="semibold" fontSize="20">
                  Contact information
                </Text>
              </Box>
              <Spacer />
              <Box p="4">
                <Text mt="2" fontSize="14">
                  Already have an account? <Link to="/login"> Log in</Link>{" "}
                </Text>
              </Box>
            </Flex>
            <Input
              placeholder="Enter email-ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Checkbox mt="3"> Email me with news and offers</Checkbox>
            <Text mt="5" fontWeight="semibold" fontSize="20">
              Shipping address
            </Text>
            <Select
              mt="4"
              placeholder="Select country/region"
              required
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="usa">USA</option>
              <option value="in">India</option>
              <option value="uk">UK</option>
            </Select>
            <Flex columnGap="3">
              <Input
                mt="4"
                placeholder="First Name"
                required
                value={fName}
                onChange={(e) => setFname(e.target.value)}
              />
              <Input
                mt="4"
                placeholder="Last Name"
                required
                value={lName}
                onChange={(e) => setLname(e.target.value)}
              />
            </Flex>
            <Input
              mt="4"
              placeholder="Company"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              mt="4"
              placeholder="Address"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <Input
              mt="4"
              placeholder="Apartment,suite,etc."
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <Flex columnGap="3">
              <Input
                mt="4"
                placeholder="Enter City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                mt="4"
                placeholder="Enter State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <Input
                mt="4"
                placeholder="Enter ZIP code"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </Flex>
            <Input
              mt="4"
              placeholder="Enter phone number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Flex>
              <Box p="4">
                <Link to="/cart">
                  <Text fontWeight="semibold" fontSize="20">
                    Return to cart
                  </Text>
                </Link>
              </Box>
              <Spacer />
              <Box p="4">
                <Button
                  pt="7"
                  pb="7"
                  pr="5"
                  pl="5"
                  bgColor="black"
                  color="white"
                  _hover={{ bg: "black", color: "white" }}
                  onClick={() => {
                    if (
                      email === "" ||
                      country === "" ||
                      fName === "" ||
                      lName === "" ||
                      company === "" ||
                      address1 === "" ||
                      address2 === "" ||
                      city === "" ||
                      state === "" ||
                      zip === "" ||
                      number === ""
                    )
                      alert("Please enter all details correctly!");
                    else {
                      alert("Order Successfully Placed!");
                      navigate("/");
                    }
                  }}
                >
                  Continue to shipping
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box w="40%" borderLeft="1px solid lightgrey">
            <PayCart />
          </Box>
        </Flex>
      </form>
      <Footer />
    </Box>
  );
}

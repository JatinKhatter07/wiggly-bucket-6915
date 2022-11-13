import React from "react";
import { Box,Button, Flex, Spacer, Text, Checkbox } from "@chakra-ui/react";
import Styles from "../Components/ProductPage.module.css";

export default function ProductFilterSection({handlefilter,handlefilterveg,handlefilterfat}) {
  return (
    <Box className={Styles.filterMainBox}>
      <Flex className={Styles.filterHeader}>
        <Text className={Styles.filterHeaderOne}>filter</Text>
        <Spacer />
        <Text className={Styles.filterHeaderTwo}>clear all</Text>
      </Flex>
      <Box className={Styles.filterBody}>
        <Text className={Styles.filterBodyHeader}>Fruits & Vegetables</Text>
        <Box className={Styles.filterBodyBox}>
          <Button className={Styles.filterBodyText} onClick={handlefilter} justifyContent="flex-start" >Fruits</Button>
          <Text className={Styles.filterBodyText}>Exotic Fruits</Text>
          <Button className={Styles.filterBodyText} onClick={handlefilterveg} justifyContent="flex-start" >Daily Vegetables</Button>
          <Text className={Styles.filterBodyText}>Exotic Vegetables</Text>
          <Text className={Styles.filterBodyText}>Baby-Tender Vege...</Text>
          <Text className={Styles.filterBodyText}>Organic</Text>
          <Text className={Styles.filterBodyText}>Canned & Frozen</Text>
          <Text className={Styles.filterBodyText}>Cold-Pressed Fre...</Text>
        </Box>
        <Text className={Styles.filterBodyHeader}>Brands</Text>
        <Box className={Styles.filterBodyBox}>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo} onChange={handlefilterfat}>
          Fat Free
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            fruit & vegetable
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            healthy alternat...
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            natures best
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            natures basket
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            tong garden
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            fabbox
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            very
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            spc
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            yummiez
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            daucy
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            dole
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            godrej nature ba...
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            vegetables
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            american garden
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            cirio
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            fragata
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            fresh
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            freshcon
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            fruits
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            happilo
          </Checkbox>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            tomato cherry
          </Checkbox>
        </Box>
        <Text className={Styles.filterBodyHeader}>Dietary & Lifestyle</Text>
        <Box className={Styles.filterBodyBox}>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            non-vegetarian
          </Checkbox>
        </Box>
        <Text className={Styles.filterBodyHeader}>Availability</Text>
        <Box className={Styles.filterBodyBox}>
          <Checkbox fontSize="12px" className={Styles.filterBodyTextTwo}>
            Exclude Out Of Stock
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

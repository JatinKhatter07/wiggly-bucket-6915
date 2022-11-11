import { Tab, TabList, Tabs,TabPanel, TabPanels, Box, Center  } from '@chakra-ui/react'
import React from 'react'
import ProductsTrending from './ProductsTrending'

const TabStyleCom = () => {
    const obj1={
        img1:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
        img2:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg',
        img3:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg',
        img4:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg'
    }
    const obj2={
        img1:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0234987c-2c01-423a-b92d-248199d17d1c_425x425.JPG",
        img2:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c60dd0da-1179-477b-8aac-63a2a5f3cca0_425x425.jpg",
        img3:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8d93f109-84d8-4da8-93dd-1a8fc4b7cf7e_425x425.jpeg",
        img4:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c4401f4b-3663-4e52-affc-d4ed3dc6c7ab_425x425.jpg"
    }
    const obj3={
        img1:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300491_1_425x425.jpg",
        img2:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d4b3e340-bc58-49a4-95d0-aa7f9f232b68_425x425.jpg",
        img3:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aff5852b-b487-45f8-b65a-22cbc4842982_425x425.jpg",
        img4:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1356020_1_425x425.jpg"
    }
  return (
    <div>
        <Center>
        <Box align="center" w={["80%"]}  overflow={"scroll"}>
        <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab style={{borderBottom:"5px solid #92BE4D"}}>OFFERS</Tab>
                <Tab style={{borderBottom:"5px solid #92BE4D"}}>ORGANIC</Tab>
                <Tab style={{borderBottom:"5px solid #92BE4D"}}>HEALTHY</Tab>
                <Tab style={{borderBottom:"5px solid #92BE4D"}}>GIFTS</Tab>
            </TabList>
            <TabPanels >
                <TabPanel >
                <ProductsTrending {...obj2}/>
                </TabPanel>
                <TabPanel>
                <ProductsTrending {...obj1}/>
                </TabPanel>
                <TabPanel>
                <ProductsTrending {...obj3}/>
                </TabPanel>
                <TabPanel>
                <ProductsTrending {...obj2}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>
        </Center>
    </div>
  )
}

export default TabStyleCom
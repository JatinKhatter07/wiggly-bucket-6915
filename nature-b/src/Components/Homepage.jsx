import { Heading } from '@chakra-ui/react'
import React from 'react'
import Banner from "./Banner"
import BannerSlides from './BannerSlides'
import FlexImages from './FlexImages'
import ProductsTrending from './ProductsTrending'
import SliderDivs from './SliderDivs'
import CarouselIntro from './slides'
import TabStyleCom from './TabStyleCom'

const Homepage = () => {
  const obj1={
    img1:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    img2:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg',
    img3:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg',
    img4:'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg'
}
const GiftObj={
  img1:"https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8",
  img2:"https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17",
  img3:"https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
}
const EventsIMG={
  img1:"https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg",
  img2:"https://www.naturesbasket.co.in/Images/PhotoGallery/American-Food-Festival.jpg",
  img3:"https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/Laffaire_Event_Thumbnail.png"
}
  return (
    <div>
        <Banner/>
        <CarouselIntro/>
        <FlexImages {...GiftObj}/>
        <Heading fontSize={24} p={10}>SHOP BY CATEGORY</Heading>
        <SliderDivs/>
        <BannerSlides/>
        <Heading fontSize={24} p={10}>WHAT'S TRENDING</Heading>
        <ProductsTrending {...obj1}/>
        <br></br>
        <Heading fontSize={24} p={10}>DISCOVER MORE</Heading>
        <br></br>
        <TabStyleCom/>
        <br></br>
        <Heading fontSize={24} p={10}>DISCOVER MORE</Heading>
        <FlexImages {...EventsIMG} />

    </div>
  )
}

export default Homepage
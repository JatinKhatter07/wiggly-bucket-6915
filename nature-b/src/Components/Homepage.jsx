import React from 'react'
import Banner from "./Banner"
import FlexImages from './FlexImages'
import SliderDivs from './SliderDivs'
import CarouselIntro from './slides'

const Homepage = () => {
  return (
    <div>
        <Banner/>
        <CarouselIntro/>
        <FlexImages/>
        <SliderDivs/>
    </div>
  )
}

export default Homepage
import { Box, Center } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function BannerSlides() {
  return (
   <Center>
    <Box w='90%' textAlign="center" p={5} >
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={400}>
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/404eece7-1e74-4c52-a498-50281d0c2aa2_1320x376.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
          alt="fourth slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </Box>
   </Center>
  );
}

export default BannerSlides;
import { Box, Center } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselIntro() {
  return (
   <Center>
    <Box w='90%' textAlign="center" p={5} >
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/a5ad3541-5426-47e1-b33c-0360c5e28c35_1320x376.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          style={{borderRadius:"10px"}}
          className="d-block w-100"
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/f15eac34-ba57-4b6f-9e7f-4095ea12c134_1320x376.jpg"
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
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg"
          alt="fourth slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </Box>
   </Center>
  );
}

export default CarouselIntro;
import { Box, Center } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import ProductDivs from './ProductDivs';

function SliderDivs() {
    const obj1={
        img1:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png",
            title:"Organic",
            li1:"Fruits & Vegtables",
            li2:"staples",
            li3:"Backery & Dairy",
            li4:"View All"
        },
        img2:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png",
            title:"Ready to Eat",
            li1:"Pastiries Desserts",
            li2:"Soups Salads",
            li3:"Hors'D Oevuvaes",
            li4:"View All"
        },
        img3:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png",
            title:"Gift Studio",
            li1:"Pastiries Desserts",
            li2:"Soups Salads",
            li3:"Hors'D Oevuvaes",
            li4:"View All"
        },
        img4:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png",
            title:"Fine Teas",
            li1:"Pastiries Desserts",
            li2:"Soups Salads",
            li3:"Hors'D Oevuvaes",
            li4:"View All"
        }
    }
    const obj2={
        img1:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png",
            title:"Heart Healty foods",
            li1:"Pastiries Desserts",
            li2:"Soups Salads",
            li3:"Hors'D Oevuvaes",
            li4:"View All"
        },
        img2:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png",
            title:"Indian Goceries",
            li1:"Fruits & Vegtables",
            li2:"staples",
            li3:"Backery & Dairy",
            li4:"View All"
        },
        img3:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png",
            title:"Confectionary and patisseris",
            li1:"Fruits & Vegtables",
            li2:"staples",
            li3:"Backery & Dairy",
            li4:"View All"
        },
        img4:{
            imgurl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png",
            title:"Internationl Cuisine",
            li1:"Fruits & Vegtables",
            li2:"staples",
            li3:"Backery & Dairy",
            li4:"View All"
        },
    }
  return (
    <Center>
        <Box w='95%' ml={"-2%"} textAlign="center" p={5} >
        <Carousel >
        <Carousel.Item interval={5000}>
            <ProductDivs {...obj1}/>
            
        </Carousel.Item>
        <Carousel.Item interval={6000}>
        <ProductDivs {...obj2}/>
            
        </Carousel.Item>
        <Carousel.Item interval={10000}>
            
        <ProductDivs {...obj1}/>
        </Carousel.Item>
        </Carousel>
        </Box>
   </Center>
  );
}

export default SliderDivs;
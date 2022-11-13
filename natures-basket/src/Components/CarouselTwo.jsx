import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function CarouselTwo() {
  return (
    <Box w={{ sm: "90%", md: "90%", lg: "85%" }} m="auto">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="800">
            <Image
              src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
              class="d-block w-100"
              alt="Home Carousel One"
            />
          </div>
          <div class="carousel-item" data-bs-interval="1600">
            <Image
              src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
              class="d-block w-100"
              alt="Home Carousel Two"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2400">
            <Image
              src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg"
              class="d-block w-100"
              alt="Home Carousel Three"
            />
          </div>
          <div class="carousel-item" data-bs-interval="3200">
            <Image
              src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
              class="d-block w-100"
              alt="Home Carousel Four"
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <Image
              src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
              class="d-block w-100"
              alt="Home Carousel Five"
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

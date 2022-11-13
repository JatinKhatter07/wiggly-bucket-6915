import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function CarouselOne() {
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
            aria-current="true"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="12"
            aria-label="Slide 13"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel One"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/7f923dd7-a3ea-4a04-a991-c3cedd64317a_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Two"
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/d076c03c-6a84-42e3-820f-96cc67b5ab62_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Three"
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/69d5deca-90c7-4099-afe1-cf444c57ac1b_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Four"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/88b99410-b311-4c4d-a2bd-61859cdc494a_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Five"
            />
          </div>
          <div class="carousel-item" data-bs-interval="6000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Six"
            />
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Seven"
            />
          </div>
          <div class="carousel-item" data-bs-interval="8000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Eight"
            />
          </div>
          <div class="carousel-item" data-bs-interval="9000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Nine"
            />
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Ten"
            />
          </div>
          <div class="carousel-item" data-bs-interval="11000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/e2815333-d548-4212-9acd-a96f08950440_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Eleven"
            />
          </div>
          <div class="carousel-item" data-bs-interval="12000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/3b8d8078-b906-4340-8ac2-d56085bf9a02_1320x376.jpg"
              class="d-block w-100"
              alt="Home Carousel Twelve"
            />
          </div>
          <div class="carousel-item" data-bs-interval="13000">
            <Image
              src="https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png"
              class="d-block w-100"
              alt="Home Carousel Thirteen"
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

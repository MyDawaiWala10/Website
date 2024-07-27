"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Imagecarousel() {
  return (
    <div className="mt-17 flex w-full items-center justify-center md:mt-20">
      <div className="w-full overflow-hidden md:w-screen">
        <Splide
          options={{
            rewind: true,
            arrows: false,
            gap: "1rem",
            type: "loop",
            speed: 700,
            autoplay: true,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img
              src="../../images/crousel-images/11.png"
              alt="Image 11"
              className="hidden md:block"
            />
            <img
              src="../../images/crousel-images/1.png"
              alt="Image 1"
              className="block md:hidden"
            />
          </SplideSlide>
          <SplideSlide>
          <img
              src="../../images/crousel-images/22.png"
              alt="Image 22"
              className="hidden md:block"
            />
            <img
              src="../../images/crousel-images/2.png"
              alt="Image 2"
              className="block md:hidden"
            />
          </SplideSlide>
          <SplideSlide>
          <img
              src="../../images/crousel-images/33.png"
              alt="Image 33"
              className="hidden md:block"
            />
            <img
              src="../../images/crousel-images/3.png"
              alt="Image 3"
              className="block md:hidden"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

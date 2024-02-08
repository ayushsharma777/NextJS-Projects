"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(goToNext, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="sliderStyles">
        <div className="slider-LeftArrow" onClick={goToPrevious}>
          {"<"}
        </div>
        <div className="slider-RightArrow" onClick={goToNext}>
          {">"}
        </div>

        <Image
          layout="fill"
          objectFit="cover"
          draggable={false}
          alt="happy images"
          src={`${slides[currentIndex].url}`}
          style={{ borderRadius: "10px" }}
        ></Image>
      </div>
    </>
  );
};

export default ImageSlider;

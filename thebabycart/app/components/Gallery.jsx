import React from "react";
import FeaturedTitle from "./FeaturedTitle";
import ImageSlider from "./ImageSlider";

const Gallery = () => {
  const slides = [
    { url: "/images/slider/img1.jpg" },
    { url: "/images/slider/img2.jpg" },
    { url: "/images/slider/img3.jpg" },
    { url: "/images/slider/img4.jpg" },
    { url: "/images/slider/img5.jpg" },
  ];

  return (
    <section className="section-Gallery container-fluid text-center">
      <FeaturedTitle
        textHead="The smile that brightens our day"
        textTag="Here, we celebrate the significance of every moment"
      ></FeaturedTitle>

      <div className="slider-container">
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </section>
  );
};

export default Gallery;

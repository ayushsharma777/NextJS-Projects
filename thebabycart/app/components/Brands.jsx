import React from "react";
import FeaturedTitle from "./FeaturedTitle";
import BrandItemImage from "./BrandItemImage";

const Brands = () => {
  const brandImage = [
    "/images/Brands/Brand1.png",
    "/images/Brands/Brand2.png",
    "/images/Brands/Brand3.png",
    "/images/Brands/Brand4.png",
    "/images/Brands/Brand5.png",
  ];
  return (
    <section>
      <FeaturedTitle
        textHead="Tailored selection of brands just for you"
        textTag="the brands accompanying us to ensure the well-being of your loved ones"
      ></FeaturedTitle>

      <div className="brand-Image-Container row gap-2">
        {brandImage.map((image, index) => {
          return (
            <div className="col-3" key={index}>
              <BrandItemImage imgUrl={image}></BrandItemImage>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;

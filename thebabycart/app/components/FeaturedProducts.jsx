"use client";
import React from "react";
import FeaturedTitle from "./FeaturedTitle";
import ProductItem from "./ProductItem";
import ShowAllText from "./ShowAll-Text";

// import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
// import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
// import dynamic from "next/dynamic";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

// const Responsive = {
//   0: {
//     items: 1,
//     margin: 5,
//   },
//   425: {
//     items: 1,
//     margin: 5,
//   },
//   768: {
//     items: 2,
//     margin: 5,
//   },
//   1024: {
//     items: 3,
//     margin: 5,
//   },
//   1440: {
//     items: 4,
//     margin: 5,
//   },
//   1600: {
//     items: 5,
//     margin: 5,
//   },
//   2560: {
//     items: 7,
//     margin: 5,
//   },
// };

// var $ = require("jquery");

// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

const FeaturedProducts = ({ title, tag, items }) => {
  return (
    <section>
      <FeaturedTitle textHead={title} textTag={tag}></FeaturedTitle>
      <div className="featured-Item-Container">
        {/* <OwlCarousel responsive={Responsive}> */}
          {items.map((products, index) => (
            <ProductItem
              key={index}
              itemId={products.itemId}
              itemImage={products.itemImage}
              itemCategory={products.itemCategory}
              itemName={products.itemName}
              itemActualPrice={products.itemActualPrice}
              itemCurrentPrice={products.itemCurrentPrice}
              itemRating={products.itemRating}
            />
          ))}
        {/* </OwlCarousel> */}
      </div>

      <ShowAllText></ShowAllText>
    </section>
  );
};

export default FeaturedProducts;

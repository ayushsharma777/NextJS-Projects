import React from "react";
import FeaturedItem from "./FeaturedItem";
// import Carousel from "./carousel";

const FeaturedItemContainer = ({ itemData }) => {
  
  return (
    <div className="featured-Container">
      {itemData.map((item, index) => {
        return <FeaturedItem key={index} item={item}></FeaturedItem>;
      })}
    </div>
  );
};

export default FeaturedItemContainer;

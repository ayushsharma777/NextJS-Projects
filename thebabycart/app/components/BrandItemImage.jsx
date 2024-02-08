import React from "react";
import Image from "next/image";
const BrandItemImage = ({ imgUrl }) => {
  return <img className="brand-Item-Image" src={`${imgUrl}`} />;
};

export default BrandItemImage;

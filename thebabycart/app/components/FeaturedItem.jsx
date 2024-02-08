import React from "react";

const FeaturedItem = ({ item }) => {
  return (
    <div className="itemDisplay col-5 col-md-auto">
      <img src={item.imgsrc} alt="" className="img-fluid"/>
      <div className="subtitle-2 m-2 m-subtitle-1">{item.text}</div>
    </div>
  );
};

export default FeaturedItem;

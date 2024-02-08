import React from "react";

const FeaturedTitle = ({ textHead, textTag }) => {
  return (
    <div>
      <div className="heading-4 text-center m-heading-5">{textHead}</div>
      <div className="body-1 text-center mb-5 m-body-2">{textTag}</div>
    </div>
  );
};

export default FeaturedTitle;

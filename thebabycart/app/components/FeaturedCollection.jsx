import React from "react";
import FeaturedTitle from "./FeaturedTitle";
import FeaturedItemContainer from "./FeaturedItemContainer";
import ShowAllText from "./ShowAll-Text";

function FeaturedCollection({ title, tag, items }) {
  return (
    <section className="section-padding">
      <FeaturedTitle textHead={title} textTag={tag}></FeaturedTitle>

      <FeaturedItemContainer itemData={items}></FeaturedItemContainer>
      <ShowAllText></ShowAllText>
    </section>
  );
}

export default FeaturedCollection;

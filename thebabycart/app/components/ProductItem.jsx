import React from "react";
import CartButton from "./CartButton";
import { ItemsStore } from "../store/Items-store";

const ProductItem = ({
  itemId,
  itemImage,
  itemCategory,
  itemName,
  itemActualPrice,
  itemCurrentPrice,
  itemRating,
}) => {
  return (
    <div className="featured-Product-Item col-12 col-md-auto">
      <div
        className="featured-Product-Item-Image"
        style={{ background: `url(${itemImage}) no-repeat center center` }}
      >
        <div className="item-Image-Heart"></div>
      </div>
      <div className="featured-Product-Info p-2">
        <span className="overline">{itemCategory}</span>
        <div className="featured-Item-Rating">
          <div className="productRatingStars">
            <div className="featured-Rating-Star"></div>
            <div className="featured-Rating-Star"></div>
          </div>
          <div className="featured-Item-RatingCount"> {`(${itemRating})`}</div>
        </div>
        <div className="subtitle-2 mt-2 showEllipsis m-subtitle-1">
          {itemName}
        </div>
        <div className="featured-Item-Prices mt-2">
          <div className="body-1 m-body-1">{itemActualPrice}</div>
          <div className="body-1 m-body-1">{`₹${itemCurrentPrice}`}</div>
        </div>
        <CartButton
          item={{
            itemId,
            itemImage,
            itemCategory,
            itemName,
            itemActualPrice,
            itemCurrentPrice,
            itemRating,
          }}
        ></CartButton>
      </div>
    </div>
  );
};

export default ProductItem;

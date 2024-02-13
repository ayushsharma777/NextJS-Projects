import React, { useState } from "react";
import Image from "next/image";

const CartItem = ({ cartItem, deleteCartItem }) => {
  const [itemCount, setItemCount] = useState(1);
  const [price, setPrice] = useState(cartItem.itemCurrentPrice);

  const handleOnMinus = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      setPrice(parseFloat(price) - parseFloat(cartItem.itemCurrentPrice));
    } else {
      confirm("Remove item from cart?") ? deleteCartItem(cartItem.itemId) : "";
    }
  };

  const handleOnPlus = () => {
    setPrice(parseFloat(price) + parseFloat(cartItem.itemCurrentPrice));
    setItemCount(itemCount + 1);
  };

  const handleOnRemove = () => {
    deleteCartItem(cartItem.itemId);
  };

  return (
    <div className="p-10 row d-flex align-items-center">
      <Image
        height={150}
        width={150}
        src={`${cartItem.itemImage}`}
        className="col-auto"
        alt="cart Image"
      ></Image>

      <div className="cart-Product-Item col-md-8">
        <div className="cart-Product-Title">
          <h2 className="subtitle-2 text-left">{cartItem.itemName}</h2>
          <h2 className="overline">{cartItem.itemCategory}</h2>
        </div>

        <div className="d-flex cart-Product-Pricing mt-4 align-items-baseline">
          <button onClick={handleOnMinus}>-</button>
          <h2 className="heading-6 ml-10 mr-10">{itemCount}</h2>
          <button onClick={handleOnPlus}>+</button>
          <h2 className="cart-Item-ActualPrice ml-10">
            {cartItem.itemActualPrice}
          </h2>
          <h2 className="cart-Item-CurrentPrice body-1 ml-10">{`₹${price}`}</h2>
          <h2 className="caption ml-10 m-caption">(20% off)</h2>
        </div>

        <div className="d-flex cart-Product-Controls mt-2">
          <button className="primary-button">
            <span className="cart-Item-HeartImage  "></span>
            ADD TO WISHLIST
          </button>

          <button className="primary-button ml-10" onClick={handleOnRemove}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

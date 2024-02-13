"use client";
import React, { useContext } from "react";
import { ItemsStore } from "../store/Items-store";

import CartItem from "./CartItem";

const CartItemContainer = () => {
  const { cartItems, deleteCartItem } = useContext(ItemsStore);

  return (
    <>
      <h2 className="heading-6 ml-10">
        My cart{" "}
        <span className="caption m-caption"> {`(${cartItems.length} items)`}</span>
      </h2>
      {cartItems.map((cartItem, index) => {
        return (
          <CartItem
            key={cartItem.itemId}
            cartItem={cartItem}
            deleteCartItem={deleteCartItem}
          ></CartItem>
        );
      })}
    </>
  );
};

export default CartItemContainer;

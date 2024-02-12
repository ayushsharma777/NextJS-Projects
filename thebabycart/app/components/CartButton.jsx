"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { ItemsStore } from "@/app/store/Items-store";
const CartButton = ({ item }) => {
  const [itemAdded, setItemAdded] = useState(false);

  const { addItemToCart } = useContext(ItemsStore);

  const handleOnClick = () => {
    setItemAdded(true);
    addItemToCart(item);
    // console.log(item);
  };

  return (
    <>
      <Link href={"/cart"}>
        <button
          className={`body-2  cart-Button-ItemAdded ${
            itemAdded ? "" : "d-none"
          }`}
        >
          <span className="cart-ItemAdded-Image"></span> GO TO CART
        </button>
      </Link>

      <div
        className={`featured-Item-Cart-Image ${itemAdded ? "d-none" : ""}`}
        onClick={handleOnClick}
      ></div>
    </>
  );
};

export default CartButton;

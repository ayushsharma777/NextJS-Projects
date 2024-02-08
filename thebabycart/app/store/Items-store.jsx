"use client";
import { Children, createContext, useState } from "react";

export const ItemsStore = createContext({
  cartItems: [],
  addItemToCart: () => {},
  deleteCartItem: () => {},
});

export const ItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteCartItem = (id) => {
    const updatedCartItems = cartItems.filter((cartItem, i) => {
      // console.log(cartItem.itemId, " id: ", id);
      return cartItem.itemId !== id;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <ItemsStore.Provider
      value={{
        cartItems,
        addItemToCart: addCartItems,
        deleteCartItem,
      }}
    >
      {children}
    </ItemsStore.Provider>
  );
};

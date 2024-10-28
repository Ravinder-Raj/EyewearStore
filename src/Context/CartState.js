


import CartContext from "./CartContext";
import { useEffect, useState } from "react";
import item from "../objects/ItemsDetails";

const Cartstate = (props) => {
  const [cartState, setCartState] = useState({
    price: 0,
    totalItem: 0,
    image: {},
    name: [],
    cart: [],
    items: {}
  });

  const countTotalItem = () => {
    setCartState((prevState) => ({
      ...prevState,
      totalItem: prevState.cart.length
    }));
  };

  const update = () => {
    setCartState((prevState) => ({
      ...prevState,
      price: prevState.price + 1
    }));
  };

  const dec = () => {
    setCartState((prevState) => ({
      ...prevState,
      price: prevState.price - 1
    }));
  };


  const addToCart = (item) => {
    const existingItem = cartState.cart.find((cartItem) => cartItem.itemCode === item.itemCode);
  
    if (existingItem) {
      // If the item is already in the cart, update the quantity
      const updatedCart = cartState.cart.map((cartItem) =>
        cartItem.itemCode === item.itemCode
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
  
      setCartState((prevState) => ({
        ...prevState,
        cart: updatedCart,
        price: prevState.price + item.itemPrice,
        totalItem: prevState.totalItem + 1
      }));
    } else {
      setCartState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, { ...item, quantity: 1 }],
        price: prevState.price + item.itemPrice,
        totalItem: prevState.totalItem + 1
      }));
    }
  
    console.log("Added to cart:", item);
  };
  
  
  const updateQuantity = (item) => {
    const updatedCart = cartState.cart.map((cartItem) => {
      if (cartItem === item) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      }
      return cartItem;
    });

    setCartState((prevState) => ({
      ...prevState,
      cart: updatedCart,
      price: prevState.price + item.itemPrice
    }));
  };

  const deleteItemFromCart = (item) => {
    const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);

    if (itemIndex !== -1) {
      const deletedItem = cartState.cart[itemIndex];

      setCartState((prevState) => ({
        ...prevState,
        cart: [
          ...prevState.cart.slice(0, itemIndex),
          ...prevState.cart.slice(itemIndex + 1)
        ],
        price: prevState.price - deletedItem.itemPrice * deletedItem.quantity
      }));

      countTotalItem();
    }
  };

  
  const decQuantity = (item) => {
    const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);
  
    if (itemIndex !== -1 && item.quantity > 1) {
      const updatedCart = cartState.cart.map((cartItem, index) =>
        index === itemIndex ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
  
      setCartState((prevState) => ({
        ...prevState,
        cart: updatedCart,
        price: prevState.price - item.itemPrice,
      }));
  
      countTotalItem();
    }
  };


  const contextValue = {
    state: cartState,
    update: update,
    dec: dec,
    addToCart: addToCart,
    updateQuantity: updateQuantity, // Ensure this line is included
    decQuantity: decQuantity,
    deleteItemFromCart:deleteItemFromCart  // Ensure this line is included
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartstate;


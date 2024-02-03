
// // import CartContext from "./CartContext";
// // import  { useEffect, useState } from "react";
// // import itemDetails from "../objects/ItemsDetails";
// // const Cartstate =(props)=>{
// //     const [cartState, setCartState] = useState({
// //         price: 0,
// //         totalItem:0,
// //         image:{},
// //         name:[],
// //         cart:[],
// //         items:{}
// //       });

      
// //       const countTotalItem = () => {
// //         setCartState((prevState) => ({
// //           ...prevState,
// //           total: Object.keys(prevState.cart).length 
// //         }));
// //       };
      
   
// //       const update = () => {
// //         setCartState((prevState) => ({
// //           ...prevState,
// //           price: prevState.price + 1
// //         }));
// //       };

// //       const dec = () =>{
// //         setCartState((prevState) => ({
// //             ...prevState,
// //             price: prevState.price - 1
// //           }));
// //       }

     

// //       const addToCart = (item) => {
// //         setCartState((prevState) => ({
// //           ...prevState,
// //           cart: [...prevState.cart, item],
// //           price: prevState.price + item.itemPrice,
// //           name: prevState.name + item.itemName,
// //           image: prevState.image + item.itemImage
// //         }));
// //         countTotalItem();
// //       };



      
// //       const removeToCart = (item) => {
// //         // Find the index of the item to be removed
// //         const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);
      
// //         if (itemIndex !== -1) {
// //           // Create a new array without the item to be removed
// //           const newCart = [
// //             ...cartState.cart.slice(0, itemIndex),
// //             ...cartState.cart.slice(itemIndex + 1)
// //           ];
      
// //           setCartState((prevState) => ({
// //             ...prevState,
// //             cart: newCart,
// //             price: prevState.price - item.itemPrice
// //           }));
      
// //           countTotalItem();
// //         }
// //       };
       
      
    
// //       // Call the function to add itemDetails when the component mounts
    
      
// //         // Add itemDetails to items when the component mounts
       
      


// //       const contextValue = {
// //         state: cartState,
// //         update: update,
// //         dec: dec,
// //         addToCart:addToCart,
// //         removeToCart:removeToCart,
// //       };
      
// //     return(
// //         <CartContext.Provider value = {contextValue}>
// //             {props.children}
// //         </CartContext.Provider>

// //     )
// // }

// // export default Cartstate;

// import CartContext from "./CartContext";
// import { useEffect, useState } from "react";
// import item from "../objects/ItemsDetails";

// const Cartstate = (props) => {
//   const [cartState, setCartState] = useState({
//     price: 0,
//     totalItem: 0,
//     image: {},
//     name: [],
//     cart: [],
//     items: {}
//   });

//   const countTotalItem = () => {
//     setCartState((prevState) => ({
//       ...prevState,
//       totalItem: Object.keys(prevState.cart).length
//     }));
//   };

//   const update = () => {
//     setCartState((prevState) => ({
//       ...prevState,
//       price: prevState.price + 1
//     }));
//   };

//   const dec = () => {
//     setCartState((prevState) => ({
//       ...prevState,
//       price: prevState.price - 1
//     }));
//   };

//   const addToCart = (item) => {
//     setCartState((prevState) => ({
//       ...prevState,
//       cart: [...prevState.cart, item],
//       price: prevState.price + item.itemPrice,
//       name: prevState.name + item.itemName,
//       image: prevState.image + item.itemImage
//     }));
//     countTotalItem();
//   };

//   const removeAllOccurrences = (item) => {
//     // Find all occurrences of the item in the cart
//     const occurrences = cartState.cart.filter((cartItem) => cartItem === item);

//     if (occurrences.length > 0) {
//       // Calculate the total price of all occurrences
//       const totalPriceToRemove = occurrences.length * item.itemPrice;

//       // Create a new array without the occurrences to be removed
//       const newCart = cartState.cart.filter((cartItem) => cartItem !== item);

//       setCartState((prevState) => ({
//         ...prevState,
//         cart: newCart,
//         price: prevState.price - totalPriceToRemove
//       }));

//       countTotalItem();
//       console.log(" remove all occurence function is running.... ")
//     }
//   };

//   const removeToCart = (item) => {
//     // Find the index of the item to be removed
//     const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);

//     if (itemIndex !== -1) {
//       // Create a new array without the item to be removed
//       const newCart = [
//         ...cartState.cart.slice(0, itemIndex),
//         ...cartState.cart.slice(itemIndex + 1)
//       ];

//       setCartState((prevState) => ({
//         ...prevState,
//         cart: newCart,
//         price: prevState.price - item.itemPrice
//       }));

//       countTotalItem();
//     }
//   };

//   const contextValue = {
//     state: cartState,
//     update: update,
//     dec: dec,
//     addToCart: addToCart,
//     removeToCart: removeToCart,
//     removeAllOccurrences: removeAllOccurrences
//   };

//   return (
//     <CartContext.Provider value={contextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default Cartstate;



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

  // const addToCart = (item) => {
  //   setCartState((prevState) => ({
  //     ...prevState,
  //     cart: [...prevState.cart, item],
  //     price: prevState.price + item.itemPrice,
  //     name: [...prevState.name, item.itemName]
  //     // image: [...prevState.image, item.itemImage]
  //   }));
  //   countTotalItem();
  // };

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
  
  


 

  // const deleteItemFromCart = (item) => {
  //   // Find the index of the item to be deleted
  //   const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);

  //   if (itemIndex !== -1) {
  //     // Create a new array without the item to be deleted
  //     const newCart = [
  //       ...cartState.cart.slice(0, itemIndex),
  //       ...cartState.cart.slice(itemIndex + 1)
  //     ];

  //     setCartState((prevState) => ({
  //       ...prevState,
  //       cart: newCart,
  //       price: prevState.price - item.itemPrice
  //     }));

  //     countTotalItem();
  //     console.log("deleteItemFromCart function is running....");
  //   }
  // };

  // const updateQuantity = (item) => {
  //   // Find the index of the item to be updated
  //   const itemIndex = cartState.cart.findIndex((cartItem) => cartItem === item);
  
  //   if (itemIndex !== -1) {
  //     // Create a new array with the updated quantity
  //     const updatedCart = cartState.cart.map((cartItem, index) =>
  //       index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  //     );
  
  //     setCartState((prevState) => ({
  //       ...prevState,
  //       cart: updatedCart,
  //       price: prevState.price + item.itemPrice,
  //     }));
  
  //     countTotalItem();
  //   }
  // };

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

  

  // const contextValue = {
  //   state: cartState,
  //   update: update,
  //   dec: dec,
  //   addToCart: addToCart,
  //   deleteItemFromCart: deleteItemFromCart
  // };
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




import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import plus from "../asset/plus.svg";
import minus from "../asset/minus.svg";
import trash from "../asset/trash.svg";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const { state, updateQuantity, decQuantity, deleteItemFromCart } =
    useContext(CartContext);

  const calculateSubtotal = () => {
    return state.cart.reduce((subtotal, product) => {
      return subtotal + product.itemPrice * product.quantity;
    }, 0);
  };

  return (
    <>
      {" "}
      <Navbar></Navbar>
      <div className="w-full min-h-[30rem] flex justify-center bg-gray-100  max-md:hidden">
        <div className="w-full max-w-screen-xl p-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Image</th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Individual Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {state.totalItem > 0 &&
                state.cart.map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <img
                        src={product.itemImage}
                        alt={product.itemName}
                        className="w-24 h-12 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="p-2">{product.itemName}</td>
                    <td className="p-2">{product.quantity}</td>
                    <td className="p-2">${product.itemPrice}</td>
                    <td className="p-2 flex justify-evenly">
                      <button onClick={() => updateQuantity(product)}>
                        <img src={plus} alt="" />
                      </button>
                      <button onClick={() => decQuantity(product)}>
                        <img src={minus} alt="" />
                      </button>
                      <button onClick={() => deleteItemFromCart(product)}>
                        <img src={trash} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr className="border-t">
                <td className="p-2" colSpan="3">
                  Total Items: {state.totalItem}
                </td>
                <td className="p-2" colSpan="2">
                  Subtotal: ${calculateSubtotal()}
                </td>
              </tr>
              <div>
                <Link to="/Checkout">
                  <button className="flex border border-slate-950 h-14 w-60  mt-auto items-center cursor-pointer bg-black text-white">
                    <h1 className="mx-auto text-base ">CHECKOUT</h1>
                  </button>
                </Link>
              </div>
            </tfoot>
          </table>
        </div>
      </div>
     
<div className="w-full min-h-[30rem] flex justify-center bg-gray-100 ">
        <div className="w-full max-w-screen-xl p-8 flex">
          <div className="w-full border-collapse">
            <div>
              <div className="border-b">
               
                <div className="p-2">Item Details</div>
              </div>
            </div>
            <div className="text-center">
              {state.totalItem > 0 &&
                state.cart.map((product, index) => (
                  <div key={index} className="border-b">
                    <div className="p-0 ">
                      <img
                        src={product.itemImage}
                        alt={product.itemName}
                        className="w-24 h-12 object-cover rounded-md mx-auto md:hidden"
                      />
                    </div>
                    <div className="p-2">
                      <div className="md:flex items-center">
                        <div className="md:w-1/2">
                          <div>{product.itemName}</div>
                          <div>Quantity: {product.quantity}</div>
                        </div>
                        <div className="md:w-1/2 md:text-right">
                          <div>Price: ${product.itemPrice}</div>
                          <div className="flex justify-evenly ">
                            <button onClick={() => updateQuantity(product)}>
                              <img src={plus} alt="" />
                            </button>
                            <button onClick={() => decQuantity(product)}>
                              <img src={minus} alt="" />
                            </button>
                            <button onClick={() => deleteItemFromCart(product)}>
                              <img src={trash} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <tfoot>
              <div className="border-t">
                <div className="p-2" colSpan="3">
                  Total Items: {state.totalItem}
                </div>
                <div className="p-2" colSpan="1" style={{ marginLeft: "10rem" }}>
                 <div className="-ml-16">
                 Subtotal: ${calculateSubtotal()}
                 </div>
                </div>
              </div>
              <div>
                <Link to="/Checkout">
                  <button className="flex border border-slate-950 h-14 w-60  mt-auto items-center cursor-pointer bg-black text-white">
                    <h1 className="mx-auto text-base ">CHECKOUT</h1>
                  </button>
                </Link>
              </div>
            </tfoot>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewCart;

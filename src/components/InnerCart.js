import React from "react";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import plus from "../asset/plus.svg";
import minus from "../asset/minus.svg";
import trash from "../asset/trash.svg";

const Cart = () => {
  const { state, deleteItemFromCart,  updateQuantity, decQuantity } =
    useContext(CartContext);

  return (
    <div>
      <div className="flex flex-col w-full  max-sm:w-full  max-sm:h-80 max-h-[28rem]  box-border   overflow-y-auto ">
        <div className="flex flex-wrap  border border-red  ">
          {state.totalItem > 0 &&
            state.cart.map((product, index) => (
              <div key={index} className=" my-5  rounded-md flex  gap-14   mx-auto">
                <div className=" flex   bg-slate-200 w-ma">
                  {" "}
                  <img
                    src={product.itemImage}
                    alt={product.itemName}
                    className="max-w-full  max-sm:w-[2rem] rounded-md w-12 h-8  my-auto"
                  />
                </div>
                <div >
                  <h1 className=" text-base font-bold">{product.itemName}</h1>
                  <div className="flex gap-5 max-w-full ">
                  <button className="max-sm:w-5 border border-black " onClick={() => updateQuantity(product)}>
                    {" "}
                    <img src={plus} alt=""   className="  max-sm:w-[10rem]"/>
                  </button>
                  <p> {product.quantity}</p>
                  <button  className="max-sm:w-5" onClick={() => decQuantity(product)}>
                    <img src={minus} alt=""  className=" border border-black  max-sm:w-[10rem]"  />{" "}
                  </button>
                  </div>
                </div>
                <div>
                  
                <button onClick={() => deleteItemFromCart(product)}>
                    <img src={trash} alt="" />
                  </button>
                  <p className="text-lg">${product.itemPrice}</p>

                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;



import React, { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import itemDetails from "../objects/ItemsDetails";
import { Link } from "react-router-dom";

const ProductCard = ({ category, index }) => {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const item = itemDetails[category][`itemCode${index}`][0];

  return (
    <>
      <div
        className={`w-full h-[19rem] max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow max-sm:m-auto max-sm:flex max-sm:flex-col hover:border hover:border-black  transition-transform transform   ${
          isHovered ? "scale-105" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/ProductPage?cat=${category}&ind=${index}`}>
          <img
            className="p-8 rounded-t-lg transfrom transition duration-[2500ms] ease-out hover:scale-110"
            src={item.itemImage}
            alt="img"
          />
        </Link>

        <div className="px-5">
          <h5 className="text-xl font-semibold tracking-tight text-black">
            <b>{item.itemName}</b>
          </h5>

          <div className="flex items-center justify-between">
            <h5 className="text-xl font-semibold tracking-tight text-black">
              ${item.itemPrice}
            </h5>
           
            <button
              className="bg-black text-white cursor-pointer w-28 h-10 transition-all duration-300 hover:filter  hover:contrast-[.4]"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

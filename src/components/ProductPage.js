import { useLocation } from "react-router-dom";
import itemDetails from "../objects/ItemsDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const ProductPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const cat = params.get("cat");
  const ind = params.get("ind");

  // Access the selected item details using category and index
  const item = itemDetails[cat][`itemCode${ind}`][0];

  const {  addToCart} =
    useContext(CartContext);

  const handleAddToCart1 = (item) => {
    addToCart(item);
  };
 

  return (
    <>
      <Navbar></Navbar>
      <div className="w-[70rem] h-full mx-auto bg-white p-8 rounded-lg shadow-md flex">
        <div className="w-[50rem] relative overflow-hidden group">
          <img
            src={item.itemImage}
           alt="imagehere"
            className="h-58 w-[35rem]  mt-10 object-cover rounded-md transfrom transition duration-[2500ms] ease-out hover:scale-110"
          />
        </div>

        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {" "}
            {item.itemCat}
            <br></br> {item.itemName}
          </h2>
          <p className="text-lg text-gray-700 font-medium mt-2">{`$${item.itemPrice}`} & FREE DILEVERY</p>
          <button className="bg-black text-white w-28 h-12 border border-white" onClick={() => handleAddToCart1(item)}>Add to Cart</button>
          <p className="text-gray-600 mt-2 w-96">{item.itemDescription}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductPage;

import React, { useContext, useState, useEffect } from "react";
import CartContext from "../Context/CartContext";
import cart from "../asset/cart.png";
import navOpen from "../asset/navOpen.png";
import navClose from "../asset/navClose.png";
import Aos from "aos";
import "aos/dist/aos.css";

import InnerCart from "./InnerCart";
import { Link } from "react-router-dom";


const Navbar = () => {
 // Replace with your actual logic to get the total
  const [isOpen, setIsOpen] = useState(false); //useState for toggle menu
  const [isCartOpen, setIsCartOpen] = useState(false); //useState fro toggle cart

  // impoeted cart

  const { state} =
    useContext(CartContext);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };



  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  useEffect(() => {
    // Add or remove the 'overflow-hidden' class to the body based on the menu state
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Clean up the effect by setting overflow to 'visible' when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isCartOpen]);

  useEffect(() => {
    // Add or remove the 'overflow-hidden' class to the body based on the menu state
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Clean up the effect by setting overflow to 'visible' when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
      document.body.classList.remove("blur");
    };
  }, [isOpen]);

  // added view js

  return (
    // <div data-aos="fade-in" className="z-0">
    <div data-aos="fade-in" className="">
      <nav className=" flex  justify-between   ">
        <div className="lg:hidden  mt-0.5 mr-3 absolute z-40 top-2.5 right-0">
          <button className="relative" onClick={toggleNavbar}>
            {isOpen ? (
              <span>
                <img className=" h-8" src={navClose} alt="" srcset="" />
              </span>
            ) : (
              <span>
                <img className="h-8" src={navOpen} alt="" srcset="" />
              </span>
            )}
          </button>
        </div>
        {/* desktop screen navbar */}
        <ul className=" relative hidden lg:flex left-0 space-x-8 h-8 text-black ml-10 cursor-pointer  mt-8 left-navbar">
          <li className="font-bold w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-12 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-5 after:-mr-2 ">
            <Link to="/">HOME</Link>
          </li>
          <li className="font-bold w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-16 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-5 after:-mr-2 ">
            <Link to="/Women">WOMEN</Link>
          </li>
          <li className="font-bold w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-11 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-5 after:mr-2 ">
            <Link to="/Men">MEN</Link>
          </li>
          <li className="font-bold w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-20   after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-5 after:-mr-2 ">
            <Link to="/About">ABOUT US</Link>
          </li>
          <li className="font-bold w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-20 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-5 after:-mr-2 ">
            <Link to="/Contact">CONTACT US</Link>
          </li>
        </ul>
        {/* desktop screen LOGO */}
        <div className=" relative hidden lg:flex  flex-col  top-0 text-black font-bold text-center mt-3 left-navbar">
          <h1 className="text-center text-2xl title ">VisionaryVibes</h1>
          <h2 className="text-center text-base ">EYEWEAR</h2>
        </div>
        {/* desktop screen right cart price  */}
        <ul className="hidden lg:flex  flex-row h-8 text-black  space-x-7 items-center mt-8 right-navbar">
        
          <li className="relative font-bold">{state.price}$</li>
          <li className="relative">
            <button onClick={toggleCart}>
              {isCartOpen ? (
                <span>
                  <img
                    data-aos="fade"
                    className="h-8 z-20"
                    src={cart}
                    alt=""
                    srcset=""
                  />
                </span>
              ) : (
                <span>
                  <img className="h-8" src={cart} alt="" srcset="" />
                </span>
              )}
            </button>
            {state.totalItem > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2">
                {state.totalItem}
              </span>
            )}
          </li>
          <Link to="/Checkout">
          {/* <li className="relative font-bold">Login</li> */}
          <li className="relative font-bold" style={{ marginRight: "3rem" }}>
            Register
          </li>
          </Link>
        </ul>
      </nav>
      {/* mobile screen menu */}
      <div className=" lg:hidden flex justify-between bg-slate-100 sticky md:sticky z-30 -mt-1 w-screen ">
        <div className="flex flex-col   text-black font-bold  mt-3  float-left ml-3 ">
          <h1 className="text-center   text-sm title ">VisionaryVibes</h1>
          <h2 className="text-center   text-xs ">EYEWEAR</h2>
        </div>
        <ul className="flex  flex-row h-8 text-black  space-x-4 items-center mt-3 mr-16">
          <li className="relative font-bold">{state.price}$</li>
          <li>
            <button onClick={toggleCart}>
              {isCartOpen ? (
                <span>
                  <img className="h-8 z-20" src={cart} alt="" srcset="" />
                </span>
              ) : (
                <span>
                  <img className="h-8" src={cart} alt="" srcset="" />
                </span>
              )}
            </button>
            {state.totalItem > 0 && (
              <span className="absolute top-1  bg-red-500 text-white rounded-full px-2">
                {state.totalItem}
              </span>
            )}
          </li>
        </ul>
      </div>
      {/* mobile screen menu */}

      {isOpen && (
        <div className="flex flex-col w-full bg-slate-100 relative h-screen -top-24 items-center text-xl space-y-12  transition-all  duration-500 ease-in-out">
          <li className="font-bold w-fit block mt-36">
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li className="font-bold w-fit block">
            {" "}
            <Link to="/women">WOMEN</Link>
          </li>
          <li className="font-bold w-fit block">
            <Link to="/Men">MEN</Link>
          </li>
          <li className="font-bold w-fit block">
            {" "}
            <Link to="/About">ABOUT US</Link>
          </li>
          <li className="font-bold w-fit block">
            {" "}
            <Link to="/Contact">CONTACT US</Link>
          </li>
          <Link to="/Checkout">
          <div className="flex flex-row space-x-10">
            <button className="border text-white h-14 w-28  bg-black">
              Register
            </button>
            <button className="border text-white h-14 w-28  bg-black">
              Log in
            </button>
          </div>
          </Link>
        </div>
      )}
      {/* Shopping cart */}

      {isCartOpen && (
        <>
          <div
            data-aos="fade-left"
            className="z-50 flex flex-col fixed top-0 right-0 h-screen   bg-slate-100 max-w-full -mr-5 max-md:mr-0 max-md:ml-[4.5rem]  ml-[75rem] overflow-y-auto w-96 cursor-pointer"
          >
            <div className="flex  h-16 ">
              <div className="mt-[1rem] max-sm:mt-2.5 text-xl absolute ml-5 my-auto h-full">
                Shopping Cart
              </div>
              <button
                // className="max-md:-ml-5"
                className="flex ml-auto my-auto mr-5"
                onClick={() => setIsCartOpen(false)}
              >
                <img
                  // className="flex absolute h-6 ml-80 max-sm:ml-64  -mt-[0.9rem]"
                  className="flex float-right   mr-auto  w-5 h-5  -mt-[0.5rem]"
                  src={navClose}
                  alt=""
                />
              </button>
            </div>
            {state.totalItem > 0 && (
              <div>
                <InnerCart></InnerCart>
              </div>
            )}
            <div className="flex flex-col mt-auto items-center">
              {/* aded product   */}

              {state.totalItem === 0 && (
                <div>
                  <h1>Cart is Empty</h1>
                </div>
              )}

              {/* product  details in the cartvafter add to cart */}
           
            </div>
            <div className="flex flex-col mt-auto  mb-11 max-md:mb-6 items-center gap-5">
              {/* cart only show continue in case of no product */}
              <div className="flex flex-col -mt-[37rem] absolute"></div>
              {state.totalItem === 0 && (
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="flex border border-slate-950 h-14 w-48  mt-auto items-center cursor-pointer bg-black text-white "
                >
                  <h1 className="mx-auto  "> Continue Shopping</h1>
                </button>
              )}
            

              {state.totalItem > 0 && (
                <>
                  <div className=" mr-52 text-base">
                    <h1>
                      <b>Total:{state.price}$</b>
                    </h1>
                  </div>
                </>
              )}

              {state.totalItem > 0 && (
                <Link to="/ViewCart"  >
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex border border-slate-950 h-14 w-60  mt-auto items-center cursor-pointer text-center bg-black text-white"
                  ><h1 className="mx-auto ">VIEW CART</h1>
                 
                  </button>
                </Link>
              )}
              
              {state.totalItem > 0 && (

                <Link to="/Checkout">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex border border-slate-950 h-14 w-60  mt-auto items-center cursor-pointer bg-black text-white"
                  >
                    <h1 className="mx-auto text-base">CHECKOUT</h1>
                  </button>
                </Link>
              )}
              {/* added view  */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

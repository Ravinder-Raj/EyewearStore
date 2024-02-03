import React from "react";
import facebook from '../asset/facebook.png';
import twitter from '../asset/twitter.png';
import insta from '../asset/instagram.png'
const Footer = () => {
  return (
    <div className="flex flex-col  mt-5 lg:h-[30rem] text-white bg-black">
      <div className="flex justify-around p-10 max-md:flex-col max-md:mx-auto max-md:space-y-5 my-auto">
        <div className=" max-md:text-center  ">
          <h1 className="text-2xl"><b>VisionaryVides</b></h1>
        </div>
        <div className=" max-md:text-center">
          <ul className="flex flex-col space-y-3">
            <li className="text-xl"><b>USEFUL LINKS</b></li>
            <li className="text-xl">Privacy Policy</li>
            <li className="text-xl"> Refund Policy</li>
            <li className="text-xl"> Shipping Informations</li>
            <li className="text-xl"> Terms & Conditions</li>
            <li className="text-xl"> FAQ’s</li>
          </ul>
        </div>
        <div className=" max-md:text-center">
        <ul className="flex flex-col space-y-3 ">
          <li className="text-2xl text"><b>CONTACT</b></li>
          <li className="text-xl">123 Fifth Avenue, New York, NY 10160</li>
          <li className="text-xl">contact@info.com</li>
          <li className="text-xl">929-242-6868</li>
          </ul>
        </div>
      </div>
      <div className="flex mt-8 justify-between mb-5  max-sm:flex-col max-sm:space-y-5  ">
        <div className=" flex max-sm:text-center max-md:mx-auto pl-5">Copyright © 2024 VisionaryVibes Store | Powered by VisionaryVibes</div>
        <div className="flex w-24 space-x-5 max-sm:mx-auto">
            <div><img className="bg-white w-32" src={facebook} alt="" /></div>
            <div><img className="bg-white w-32" src={twitter} alt="" /></div>
            <div><img className="bg-white w-32" src={insta} alt="" /></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

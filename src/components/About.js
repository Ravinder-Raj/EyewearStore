import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import bg1 from "../asset/AboutBg.jpg";
import bg2 from '../asset/AboutBg2.jpg'
import bg3 from '../asset/AboutBg3.jpg'
import FooterCard from './FooterCard'

const About = () => {
  return (
    <div className=" box-border flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col   ">
        <div className="h-[26rem] ">
          <img src={bg1} alt="" className=" -mt-20 h-96 w-full " />
          <h1 className="text-8xl  title -mt-64 text-center max-md:text-5xl">ABOUT US</h1>
        </div>
        <div className="flex h-full -mt-24 max-sm:flex-col    ">
          <div className=" w-1/2 p-24 max-sm:p-0 ">
            <h1 className=" text-2xl">ABOUT US </h1>
            <h1 className="text-6xl title max-lg:text-5xl max-sm:text-5xl w-full max-sm:w-screen max-sm:mt-5 ">
              We are an eyewear brand from world
            </h1>
          </div>
          <div className=" flex flex-col p-8 w-1/2 max-sm:p-0 max-sm:w-full max-md:-mt-5 ">
            <h1 className="text-2xl mt-auto max-sm:mt-10 max-md:text-lg   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              beatae doloribus veritatis atque, minus soluta tenetur magni
              expedita illo repellat ab suscipit. Quo nobis dolorum dolores
              harum iure vero eum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, ducimus.
            </h1>
          </div>
        </div>
        <div className=" mt-5 mb-5 w-full">
          <img src={bg2} alt="" className="h-96 w-full" />
        </div>
        <div className="flex max-sm:flex-col max-lg:justify-between  gap-10">
          <div className="w-1/2  ml-20 max-sm:m-0  max-sm:w-full">
            <h1 className="text-7xl title max-sm:text-center max-sm:text-3xl">OUR VISION</h1>
            <img src={bg3} alt=""  className="w-[34rem] h-[35rem]  max-sm:w-4/5 max-sm:mx-auto  max-sm:h-80"/>
          </div>
          <div className="  w-1/2 max-sm:w-screen">
            <h1 className="text-5xl mt-12 max-sm:ml-10 max-sm:text-3xl">Lorem, ipsum</h1>
            <h1 className="w-[30rem] max-sm:w-4/5 max-lg:w-4/5 max-sm:text-justify max-sm:mx-auto text-justify  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe amet earum deleniti eius quae illum maiores, nisi ea sint tenetur voluptatum quis cumque est illo quam sit dolores fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos id vel animi dolores corrupti delectus dicta error repellendus optio mollitia quisquam quod, quia non natus provident saepe quae ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum delectus veniam ab expedita, blanditiis culpa eius voluptas tempora impedit nulla laborum obcaecati possimus sequi ut, ratione minus itaque laudantium veritatis.
            </h1>
          </div>
        </div>
      </div>
      
      <FooterCard></FooterCard>
      <Footer></Footer>
    </div>
  );
};
export default About;

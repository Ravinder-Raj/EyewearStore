import React, { useEffect } from "react";
import sample from "../asset/home1.2.jpg";
import sample1 from "../asset/home2.jpg";
import sample2 from "../asset/20433.jpg";
import sample3 from "../asset/home4.jpg";
import sample4 from '../asset/home5.jpg'
import glasses from "../asset/glasses.png";
import ProductCard from "./ProductCard";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import FooterCard from "./FooterCard";
import Footer from "./Footer";


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="  box-border  ">
      <Navbar></Navbar>
      <div className=" flex flex-col  h-screen mt-72 ml-12 space-y-1">
        {/* backgrunfd image */}
        <div className=" -mt-96 -ml-12">
          <img className="h-[108vh] w-screen  " src={sample} alt="" />
        </div>

        {/* landing page text */}
        <div className="-mt-24 absolute -ml-5">
          <div className="text-xl">Visionary Style</div>
          <div className="text-3xl">
            Discover Unparalleled Eyewear Elegance with
          </div>
          <div className="text-4xl title text-wrap">VisionaryVibes</div>
          <div className="text-xl space-y-4">
            <button className="border border-slate-950 h-12  w-32  bg-black text-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="flex flex-col  flex-grow md:flex-row  md:relative space-y-4 md:space-y-4  md:space-x-4 justify-evenly mt-5 items-center  ">
        <div className="flex flex-col  h-[38rem] -mt-80   w-full space-y-2 bg-slate-200 p-3.5 py-20  ">
          <div className=" text-2xl title">A few words about us</div>
          <div className="lg:text-7xl md:text-5xl sm:text-7xl xl:text-7xl text-7xl title text-nowrap max-sm:text-6xl">
            Discover <br /> Unique <br /> Style at <br /> Visionary
            <br />
            Vibes.
          </div>
          <div className="text-xl space-y-4">
            <button className="border border-slate-950 h-12  w-32  bg-black text-white">
              READ MORE
            </button>
          </div>
        </div>
        <div className="  w-full items-start md:ml-10 mt-96  md:-mt-80 ">
          <img
            className="  md:mt-[-21rem] w-full h-[38rem]  "
            src={sample1}
            alt=""
          />
        </div>
        <div className="w-full mt-96 md:-mt-80">
          <img
            className="  md:mt-[-21rem]   w-full h-[38rem] "
            src={sample2}
            alt=""
          />
        </div>
      </div>
      {/* Third section */}
      <div className="flex bg-slate-200 h-[40rem] mt-5  md:flex-row flex-col-reverse space-x-20 ">
        <div className="flex flex-col space-y-3  w-full  m-auto  mr-10 pl-10  ">
          <div className="text-xl">Unleash Your Unique Style</div>
          <div className="text-5xl ">Be different in your own way!</div>
          <div className="w-70  text-xl text-wrap ">
            At Visionary Vibes, embrace diversity with our curated eyewear
            collection. From timeless classics to cutting-edge trends, find your
            perfect pair
          </div>
          <button className="border border-slate-950 h-12  w-32  bg-black text-white ">
            SHOP NOW
          </button>
        </div>
        <div className=" items-center m-auto  pr-10   ">
          <img
            className="lg:w-[65rem] md:w-full md:auto  "
            src={glasses}
            alt=""
          />
        </div>
      </div>
      {/* Fourth section */}
      <div className="flex bg-slate-200 h-full mt-5  md:flex-row flex-col  md:space-x-0  gap-y-10  ">
        <div className=" items-center m-auto ">
          
          <img className="h-[40rem] w-[90rem]" src={sample3} alt="" />
        </div>
        <div className=" w-full flex flex-col  m-auto  items-center  ">
          <ProductCard category="women" index={21} />
         
        </div>
      </div>
      {/* Section five user testimonials */}

      <div className="  bg-slate-200 mt-5 ">
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8  bg-slate-200 ">
          <h1 className="text-center text-5xl max-sm:text-3xl py-10 ">
            User Testimonials
          </h1>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto h-12" src={sample} alt="" />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={sample}
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">CEO of XYZ</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <button className="border border-slate-950 h-12 w-32  flex items-center justify-center mx-auto text-center mt-5 bg-black text-white">
            READ MORE
          </button>
        </section>
      </div>
      {/* Section six  */}

      <div className="flex bg-slate-200 h-[40rem] mt-5  md:flex-row flex-col-reverse md:space-x-10 space-x-0 ">
        <div className="flex flex-col space-y-3  w-full  m-auto  text-wrap pl-10 border   ">
          <div className=" text-5xl  title"> CARE OF YOUR EYEWEAR</div>
          <div className="w-70  text-xl">
            At Visionary Vibes, embrace diversity with our curated eyewear
            collection.
          </div>
          <button className="border border-slate-950 h-12  w-32   bg-black text-white ">
            READ MORE
          </button>
        </div>
        <div className="flex  ml-5 my-auto  md:mr-5   ">
          <img
            className="lg:w-[65rem] md:w-[40rem] md:auto h-72 w-80  md:w-70 md:h-[35rem]  md:mr-10 flex mx-auto  "
            src={sample4}
            alt=""
          />
        </div>
      </div>
      {/* Section 7 */}
      <section className="bg-slate-200 flex flex-col mt-5 h-full ">
        <div className="flex text-center flex-col mt-5 space-y-5">
          <div className="text-xl">POPULAR PRODUCTS</div>
          <div className="title text-5xl">Trending now</div>
        </div>
        <div className="flex md:flex-row justify-around  flex-col max-md:space-y-10 space-x-10  max-md:space-x-0 max-lg:space-x-0 flex-wrap mx-auto mt-14 pb-10">
          <div className="">
            {" "}
            <ProductCard category="men" index={11} />
          </div>
          <div className="">
            {" "}
            <ProductCard category="women" index={22} />
          </div>
          <div className=" max-md:mt-10">
            {" "}
            <ProductCard category="men" index={14} />
          </div>
        </div>
      </section>
      <FooterCard></FooterCard>
      <Footer></Footer>
    </div>
  );
};
export default Home;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg1 from "../asset/AboutBg.jpg";

import FooterCard from "./FooterCard";

const Contact = () => {
  return (
    <div className=" box-border flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col   ">
        <div className="h-[26rem] ">
          <img src={bg1} alt="" className=" -mt-20 h-96 w-full " />
          <h1 className="text-8xl  title -mt-64 text-center max-md:text-5xl">
            CONTACT
          </h1>
        </div>
        <div className="flex  -mt-24 max-sm:flex-col h-full    ">
          <div className=" w-1/2 p-24 max-sm:p-0  mx-auto  max-md:p-0 max-md:mx-0 h-full">
            <h1 className="text-6xl title max-lg:text-5xl max-sm:text-4xl w-full max-sm:w-screen max-sm:mt-5     max-md:text-center">
              GET IN TOUCH
            </h1>
            
            <div className="text-xl mt-10  max-sm:w-screen  max-md:text-center mx-auto ">
              <h1>Lorem, ipsum dolor.</h1>
              <h1>Lorem, ipsum.</h1>
              <h1>contact@visionaryvibes</h1>
              <h1>5896632154</h1>
            </div>
          </div>
          <div className=" flex flex-col p-8 w-1/2 max-sm:p-0 max-sm:w-full    h-full">
            <form class="max-w-md mx-auto  w-4/5  drop-shadow-xl">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <form class="max-w-sm mx-auto">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </form>

              <button
                type="submit"
                class="text-white focus:ring-4 focus:outline-none  font-medium  text-sm w-24 sm:w-auto px-5 py-2.5 text-center bg-black mt-5 ml-2 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterCard></FooterCard>
      <Footer></Footer>
    </div>
  );
};
export default Contact;

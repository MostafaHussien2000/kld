import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './navBar.css'
import logo from "../../../public/images/logo.png";

export default function Footer() {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <footer
        className={
          location.pathname === "/Login" ||
          location.pathname === "/Register" ||
          location.pathname === "/forget-password" ||
          location.pathname === "/reset-password" ||
          location.pathname === "/*"
            ? "hidden"
            : ""
        }
      >
        <div className="bg-footerBg bg-fixed relative mt-10 py-20 flex justify-between flex-wrap max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] m-0">
          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12  max-sm:flex max-sm:justify-center mt-5">
            <div className="space-y-5 mx-2 ">
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-5addf.appspot.com/o/images%2Flogo_light.png?alt=media&token=06f0238a-cb8c-4afe-8c04-aa4b40a04502"
                className="h-10 mr-3"
                alt="Flowbite Logo"
              /> */}
              {/* <Link to="/">
                <img src={logo} className="w-20" /> */}
              <h2 className=" text-white ">kld fasion store</h2>
              {/* </Link> */}
              <p className=" text-gray-300 text-base capitalize ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere aspernatur, voluptatem ipsa laudantium recusandae?
              </p>

              <div className="flex space-x-1 ">
                <div className="rounded-md  bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center">
                  <i className="fa-brands fa-facebook-f">
                    <a href=""></a>
                  </i>
                </div>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <a href="https://www.instagram.com/kld.storee/profilecard/?igsh=czh2ZTFvdHY5aXBu">
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center">
                
                  <i className="fa-brands fa-instagram">
                    
                  </i>
                 
                </div>
                </a>
                
                <a href="https://wa.me/971561171023">
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center">
              
                  <i className="fa-brands fa-whatsapp"></i>
                  
                </div>
                </a>
                <div className="rounded-md bg-gray-500  bg-opacity-50  text-white py-2 hover:bg-secondary hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-2/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
            <h4 className="font text-white font-semibold text-xl">
              Quick Links
            </h4>
            <hr className=" w-14 "></hr>
            <ul className=" text-gray-300 font-semibold list-disc px-3">
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                About Us
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Blogs & Articles
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

              {/* <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Doors
              </li>
              <li className=" hover:text-secondary hover:translate-x-3 duration-300 cursor-pointer">
                Drawers
              </li> */}

          <div className="max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 space-y-5 mt-5">
            <h4 className="font text-white font-semibold text-xl">Contact</h4>
            <hr className=" w-14 "></hr>

            <div className="flex space-x-2">
              <i className="fa-solid fa-location-dot text-gray-300 py-1"></i>
              <p className=" text-gray-300">Abu Dhabi , Al Zahia ,Tourist Club , United Arab Emirates</p>
            </div>
            <div className="group flex space-x-2 cursor-pointer">
              <i className="fa-solid fa-envelope text-gray-300 py-1  group-hover:text-gray-300 duration-300"></i>
              <p className=" text-gray-300  group-hover:text-secondary  duration-300">
                Khoulod@gmail.com
              </p>
            </div>
            <div className="group flex space-x-2 cursor-pointer">
              <i className="fa-solid fa-phone text-gray-300 py-1 group-hover:text-gray-300 duration-300"></i>
              <p className=" text-gray-300 group-hover:text-secondary  duration-300">
                +971 56 117 1023
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-primary opacity-80 justify-around py-8 ">
          <div className="flex flex-wrap gap-5">
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer  ">
              Terms of Use
            </a>
            <a className=" text-gray-300 hover:text-secondary ease-in-out duration-300 cursor-pointer ">
              Privacy Policy
            </a>
          </div>
          <div className=" text-gray-300">
            2024 © Khoulod. All Rights are Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import { FaHotel, FaTrain } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineFlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Flight",
    icon: <MdOutlineFlight />,
    path:"/flight"
  },
  {
    name: "Accommodation ",
    icon: <FaHotel />,
    path:"/accommodation"
  },
  {
    name: "Tour",
    icon: <MdTour />,
    path:"/tours/home"
  },


];
const Services = () => {
  const Navigate =useNavigate();
  return (
    <>
      <div class="lg:px-36 lg:pt-5 lg:pb-[90px]">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span class="text-primary mb-2 block text-2xl font-semibold">
                  Our Services
                </span>
                {/* <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2> */}
                <p class="text-body-color text-base">
                Rinor handles flights, hotels, tours and even car rentals. Want an ordinary tour or something special? We can do both by customizing our services at your convenience! Explore religious sites, local culture, and nature wonders. We connect you with friendly locals for unique experiences.                </p>
              </div>
            </div>
          </div>
          <div class="-mx-4 grid lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div onClick={()=>Navigate(category.path)} class="mb-8 rounded-[20px] bg-white p-2 shadow-md  hover:shadow-lg md:px-7  grid grid-cols-2 justify-center">
                <div class=" text-black text-3xl mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  {category.icon}
                </div>
                <h4 class="text-dark mb-3 mt-5 text-lg font-semibold">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

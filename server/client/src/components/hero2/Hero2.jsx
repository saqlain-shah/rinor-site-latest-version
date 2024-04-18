import React from "react";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      <div class="md:px-36 px-8 md:py-5 py-5">
        <div class="flex lg:flex-row flex-col grid-cols-2 gap-10 justify-center items-center">
          <div class="flex flex-col gap-5 justify-center p-5">
            <h1 class="text-4xl md:text-5xl font-bold">Flight,  Reservation, Stays & Tours  with</h1>
            {/* <h1 class="text-4xl md:text-5xl font-bold"></h1> */}

            <h1 class="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              RINOR
            </h1>
            <p class="mt-4">
              Experience Gilgit-Baltistan like never before. Rinor takes care of everything – flight, Accommodation & tour.            </p>
            <Link to={'/tours/home'} className=" mt-4" >
              <button
                className="bg-black text-white rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold px-2 py-3 w-full"
                >
                Get started
              </button>
            </Link>
          </div>
          <div className="w-[1032px] h-[664px] flex justify-center items-center">
            <img
              src="/Home/Home-3.jpg"
              // "https://img.freepik.com/premium-photo/palm-tree-jungle-philippines-concept-about-wanderlust-tropical-travels-swinging-river-people-having-fun_186382-1220.jpg?w=1060"
              alt="heroimg"
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;

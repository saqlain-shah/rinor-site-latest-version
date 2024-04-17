import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div className="">
        <h3 className="text-2xl font-bold text-[#41A4FF]">RINOR</h3>
        <p className="py-4">
        Accompanying us, you have a trip full of experiences. With Rinor: ticketing, hotels, tours, and many more.
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          <FaWhatsappSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-[#41a3ff]">Services</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Flight</li>
            <li className="py-2 text-sm">Hotel</li>
            <li className="py-2 text-sm">Tour</li>
            <li className="py-2 text-sm">Experience</li>
 
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-[#41A4FF]">Contact</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">info@Rinor.pk</li>
            <li className="py-2 text-sm">(058154) 57424-5</li>
            <li className="py-2 text-sm">0340-0596665</li>
            <li className="py-2 text-sm">Rinor, Jama Masjid Rd, Skardu, Gilgit-Baltistan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

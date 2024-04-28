import React from "react";
import tourCategoris from "../../../assets/data/tourCategoris";
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  return (
    <div className="bg-white ">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {tourCategoris.map((tours) => (
          <Link to={`/${tours.links}`}>
            <button type="button">
              <div
                key={tours.id}
                className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 lg:h-[420px]"
              >
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl lg:aspect-none group-hover:opacity-40 lg:h-80">
                  <img
                    src={tours.photo}
                    alt={tours.imageAlt}
                    className="h-96 md:w-4/5 object-cover object-center rounded-3xl p-4 lg:h-full lg:w-full"
                  />
                </div>

                <h3 className="text-2xl pt-2 pl-6 pr-6 pb-2 font-bold text-gray-700 text-center justify-center">
                  {tours.title}
                </h3>
                <span className=" pt-1 pl-4 pr-4 pb-6 font-light text-gray-500 text-center mb-8 justify-center">{tours.sub_title}</span>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;

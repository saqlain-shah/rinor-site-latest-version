import React from "react";
import { MdTour } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { tourData } from "../../pages/Tour/tourData";
import { FaHandPointRight } from "react-icons/fa";
import { IoBed } from "react-icons/io5";


const DaysShow = () => {
  const { id } = useParams();
  const days = tourData.find((tour) => tour.id === id).plan || []
  // const tour = tourData.find((tour) => tour.id === 1);
  // //destructure
  // const { dayDetails } = tour;
  console.log("days", days, id)
  return (
    <div>
      <div className="text-5xl  mb-11">
        <p>Day Description</p>
      </div>
      <div>
        <ul
          class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
          data-te-stepper-init
          data-te-stepper-type="vertical"
        >
          {/* <!--First item--> */}
          {days && days.map((day, index) => (
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
            >
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#41A4FF]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-xl font-medium text-[#40464f]"
                >
                  {index + 1}
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-neutral-500 text-2xl after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-black"
                >
                  <div className="flex flex-row gap-3">
                    {day.title}
                    {index === 0 ? (
                      <BiMapPin className="text-red-500 text-3xl" />
                    ) : (
                      <MdTour className="text-[#15A891] text-3xl" />
                    )}
                  </div>
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                class="transition-[height, margin-bottom, padding-top, padding-bottom]
         text-xl left-0 overflow-hidden pb-1  duration-300 ease-in-out pl-24"
              >
                {day.activities && day.activities.map((activity, index) => (
                  <ul key={index} className="m-4 ">
                    {/* <PiCaretDoubleRightBold color="gray" /> */}
                    <li className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 -ml-5">
                        {!activity.options ? <FaHandPointRight color="gray" /> : <div className="ml-5"></div>}
                        <div className="flex flex-col gap-2">
                          <h4 className=" font-semibold -mb-3 text-blue-900">{activity.name}</h4>
                          <span className="pl-2 pt-1 text-sm text-yellow-600 font-extralight -mb-3">{activity.type}</span>
                        </div>
                      </div>
                      {activity.description && <span className="text-gray-700 pl-3">{activity.description}</span>}
                      <div className="m-1 flex xs:flex-col lg:flex-row items-center">
                        {activity.options && activity.options.map((option, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="p-2">
                              <h6 className=" font-medium text-blue-900">{option.name}</h6>
                              <span className="text-gray-700 pl-2">{option.desc}</span>
                            </div>
                            {idx % 2 === 0 && <div className=" lg:h-40 md:w-[1px] lg:border-gray-700 lg:border bg-gray-700"></div>}
                          </div>
                        ))}
                      </div>
                    </li>

                  </ul>
                ))}
                {day.nightStay && <div className="flex gap-1 items-center -ml-5">
                  <IoBed />
                  <span className="text-gray-700 font-medium p-2">Night Stay : </span>
                  <span className="text-gray-700 font-normal">{day.nightStay}</span>
                </div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DaysShow;

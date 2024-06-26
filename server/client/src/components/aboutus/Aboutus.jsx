import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="/Potrait/Potrait-1.jpg"
                      // "https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt=""
                      height={"50%"}
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="/Home/Home-1.jpg"
                      // "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4 h-[70%]">
                    <img
                      src="/Potrait/Potrait-2.jpg"
                      // "https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                      height={"80%"}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-2xl font-semibold">
                  Why Choose RINOR
                </span>
                {/* <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                </h2> */}
                <p className="text-body-color mb-8 text-base">
                  With Rinor your Gilgit-Baltistan adventure is full of discovery and adventure. As the top service provider in the region since 2017, Rinor ensures healthy experiences – from booking flights and comfortable accommodations to unique adventure, sightseeing, cultural and religious tours for over 12 years. Rinor offers a trusted network and an experienced team to ensure your tour's efficiency and quality.     </p>

                {/* <p className="text-body-color mb-12 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

import React from "react";
// import banner from "../../public/Banner.png"
import banner1 from "../../public/banner1.png"
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Hello Readers, Welcome to ReadSphere{" "}
              <span className="text-slate-500">Where Every Page Tells a New Story!!!</span>
            </h1>
            <p className="text-sm md:text-[18px]">
            Your literary journey begins here. With thousands of books available for 
            online reading, lose yourself in captivating tales, enlightening
             reads, and stories that spark your imagination.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 bg-blue-800 text-white hover:bg-blue-950">Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner1}
            className="md:w-[550px] md:h-[500px] md:ml-12 rounded-xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
import React, { useState } from "react";
import { App_phone } from "../../assets/assets";

const Phone = () => {
  const [inputValue, setInputValue] = useState("Email");

  return (
    <div className="flex bg-amber-50 dark:bg-[#080529] dark:text-white items-center gap-8 lg:gap-12 justify-center flex-col md:flex-row mt-12 py-12 px-8 lg:px-20">
      <div className="w-40 md:w-80 h-full lg:h-96">
        <img src={App_phone} className="w-full h-full" alt="" />
      </div>
      <div className="">
        <p className="text-3xl lg:text-5xl font-semibold mb-2 lg:mb-4">
          Enroll in Course!
        </p>
        <p className="text-sm lg:text-base">
          Unlock your potential for success with our course.
        </p>

        <form className="flex flex-col gap-4 mt-4 lg:mt-8">
          <div className="flex items-center gap-4">
            <div
              onClick={() => setInputValue("Email")}
              className="flex items-center gap-2 text-sm lg:text-lg"
            >
              <input
                type="radio"
                name="link"
                id="email"
                className="lg:size-4"
                defaultChecked
              />
              <label htmlFor="email">Email</label>
            </div>
            <div
              onClick={() => setInputValue("Phone")}
              className="flex items-center gap-2 text-sm lg:text-lg"
            >
              <input
                type="radio"
                name="link"
                id="phone"
                className="lg:size-4"
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-4">
            {inputValue === "Email" ? (
              <input
                className="outline-none  border border-black px-2 py-1 lg:px-4 lg:py-2 w-60"
                required
                type="email"
                placeholder="Email"
              />
            ) : (
              <input
                className="outline-none rounded-md border border-black px-2 py-1 lg:px-4 lg:py-1 w-60"
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone"
              />
            )}

            <button
              type="submit"
              className="text-sm px-2 py-1 lg:px-4 lg:py-2 lg:text-base bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 text-white"
            >
              Join now
            </button>
          </div>
        </form>

        {/* <div className='mt-8'>
                    <p>Download app from</p>

                    <div className='flex items-center mt-2 gap-4'>
                        <img src={Apple} alt="" />
                        <img src={Google_play} alt="" />
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Phone;

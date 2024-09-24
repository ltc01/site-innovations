import React, { useState } from "react";
import { App_phone } from "../../assets/assets";

const Phone = () => {
  const [inputValue, setInputValue] = useState("Email");

  return (
    <div className="flex w-full gap-8 pb-20 py-10 dark:bg-[#080529] dark:text-white items-center mx-auto justify-center flex-col md:flex-row">
      <div className="w-40 md:w-[23%]">
        <img src={App_phone} className="w-full" alt="Android app-Baoiam" />
      </div>
      <div className="md:w-1/3 w-[80%]">
        <p className="text-3xl font-bold">
          Take the Leap—Start{" "}
          <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
            Learning
          </span>{" "}
          Now!
        </p>
        <p className="font-medium mt-2 text-slate-600">
          Unlock your potential for success with our courses.
        </p>

        <form className="flex flex-col gap-4 mt-4">
          {/* <div className="flex items-center gap-4">
            <div
              onClick={() => setInputValue("Email")}
              className="flex items-center gap-2 text-sm lg:text-lg "
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

          <div className="flex items-center flex-col md:flex-row gap-4 ">
            {inputValue === "Email" ? (
              <input
                className="outline-none rounded-md border border-black px-2 py-1 lg:px-4 lg:py-2 w-60"
                required
                type="email"
                placeholder="Email"
              />
            ) : (
              <input
                className="outline-none rounded-md  border border-black px-2 py-1 lg:px-4 lg:py-1 w-60"
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone"
              />
            )}

            <button
              type="submit"
              className="text-sm rounded-md px-2 py-1 lg:px-4 lg:py-2 lg:text-base bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 text-white"
            >
              Join now
            </button>
          </div> */}
          <div className="w-fit flex p-1 rounded-full text-left border focus-within:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-1"
            />
           <button
    type="submit" // Change to 'submit'
    className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-2"
  >
              Submit
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

import React from "react";
import { industry, interestedCheckbox } from "../../Data";

const ContactForm = () => {
  return (
    <div className="mt-20 w-[70%] p-4 mx-auto h-full max-xs:w-full max-xs:p-4 max-xs:mt-10 max-xs:h-full max-xs:py-2">
      <h1 className="text-5xl font-semibold max-xs:text-3xl max-xs:text-center">
        Contact
      </h1>

      <form
        action=""
        className="w-full h-full py-4 flex flex-col gap-4 text-black  max-xs:flex max-xs:flex-col max-xs:gap-4 "
      >
        {/* Name */}
        <div className="flex flex-col w-full max-xs:flex-col">
          <p className="text-lg font-medium max-xs:text-base dark:text-white">
            Name <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center justify-between gap-8 w-full max-xs:flex-col max-xs:gap-4 max-xs:w-full">
            <div className="w-1/2 flex flex-col max-xs:w-full">
              <input
                type="text"
                id="first"
                className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
                required
              />
              <label
                htmlFor="first"
                className="text-sm max-xs:text-xs dark:text-white"
              >
                First
              </label>
            </div>
            <div className="w-1/2 flex flex-col max-xs:w-full">
              <input
                type="text"
                id="last"
                className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
                required
              />
              <label
                htmlFor="last"
                className="text-sm max-xs:text-xs dark:text-white"
              >
                Last
              </label>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="company"
            >
              Company <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="company"
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
              required
            />
            <span className="text-sm max-xs:text-xs dark:text-white">
              Who do you work for?
            </span>
          </div>

          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="agency"
            >
              Company represented (if agency)
            </label>
            <input
              type="text"
              id="agency"
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="email"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
              required
            />
          </div>

          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
            />
          </div>
        </div>

        {/* Job & Industry */}
        <div className="flex gap-8 w-full max-xs:flex-col max-xs:gap-4">
          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="job"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job"
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1"
            />
          </div>

          <div className="flex-col flex w-1/2 max-xs:w-full">
            <label
              className="text-lg font-medium max-xs:text-base dark:text-white"
              htmlFor="industry"
            >
              Industry
            </label>
            <select
              name=""
              id="industry"
              className="px-4 py-2 border border-black/60 w-full max-xs:py-1 "
            >
              <option value="">Select an Industry</option>
              {industry.map((i) => (
                <option className="dark:text-white" key={i.id} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interested */}
        <div className="w-full max-xs:w-full">
          <p className="text-lg font-medium max-xs:text-base dark:text-white">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2 max-xs:grid-cols-1 max-xs:gap-2">
            {interestedCheckbox.map((c) => (
              <div key={c.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={c.value}
                  name={c.value}
                  value={c.value}
                  required
                />
                <label
                  className="ml-2 max-xs:text-sm dark:text-white"
                  htmlFor={c.value}
                >
                  {c.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <div className="w-full max-xs:w-full">
          <label
            className="text-lg font-medium max-xs:text-base dark:text-white"
            htmlFor="help"
          >
            How can we help?
          </label>
          <textarea
            rows={4}
            id="help"
            className="px-4 py-2 border border-black/60 w-full mt-2 max-xs:py-1 max-xs:mt-2"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 mt-4 uppercase rounded-full bg-black text-white border-black  max-xs:mt-2 dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] border dark:hover:text-[#EB0027] max-xs:text-[3vw] max-xs:px-[17px] max-xs:py-[4.5px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

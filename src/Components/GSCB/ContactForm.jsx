import React, { useState } from "react";
import { industry, interestedCheckbox } from "../../Data";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
const apiUrl = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    institute: "",
    designation: "",
    email: "",
    phone: "",
    job_title: "",
    contact_type: "",
    message: "",
  });
  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("before submit:", formData);
    try {
      const data1 = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        institute: formData.institute,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        job_title: formData.job_title,
        contact_type: formData.contact_type,
        message: formData.message,
      };
      const { data } = await axios.post(
        // `https://proxy-server-baoiam.vercel.app/submit-form`,
        `${apiUrl}/api/contact-gcep/`,
        data1
      );
      console.log("GCEP form: ", data);
      setShowPopup(true);
      setLoading(false);
      setFormData({
        first_name: "",
        last_name: "",
        institute: "",
        designation: "",
        email: "",
        phone: "",
        job_title: "",
        contact_type: "",
        message: "",
      });
    } catch (e) {
      console.log(e.stack);
    }
  };
  return (
    <div className="mt-20 w-[70%] p-4 mx-auto h-full max-lg:w-[80%] max-md:w-[90%] max-sm:w-[95%] max-xs:w-full max-xs:p-4 max-xs:mt-10">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center">
            {/* Success Icon */}
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4 ${animatePing ? "animate-ping" : ""
                }`}
            />

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
              Successfully Submitted Data
            </h2>
            {/* <p className="text-gray-700 mb-6">
              Your enrollment was successful. We’re excited to have you on
              board!
            </p> */}

            {/* Decorative Element */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-md"></div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="bg-gradient-to-br from-purple-600 via-indigo-500 to-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <h1 className="text-5xl font-semibold max-lg:text-4xl max-md:text-3xl max-sm:text-3xl max-xs:text-3xl max-xs:text-center">
        Contact
      </h1>

      <form
        className="w-full h-full py-4 flex flex-col gap-4 text-black max-sm:gap-4"
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <p className="text-lg font-medium max-sm:text-base dark:text-white">
            Name <span className="text-red-600">*</span>
          </p>
          <div className="flex items-center justify-between gap-8 w-full max-sm:flex-col max-sm:gap-4">
            <div className="w-1/2 flex flex-col max-sm:w-full">
              <input
                value={formData.first_name}
                onChange={(e) => {
                  setFormData({ ...formData, first_name: e.target.value });
                }}
                contact_type="text"
                id="first"
                className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
                required
              />
              <label htmlFor="first" className="text-sm dark:text-white">
                First
              </label>
            </div>
            <div className="w-1/2 flex flex-col max-sm:w-full">
              <input
                value={formData.last_name}
                onChange={(e) => {
                  setFormData({ ...formData, last_name: e.target.value });
                }}
                contact_type="text"
                id="last"
                className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
                required
              />
              <label htmlFor="last" className="text-sm dark:text-white">
                Last
              </label>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex gap-8 w-full max-sm:flex-col max-sm:gap-4">
          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="company"
            >
              Institute <span className="text-red-600">*</span>
            </label>
            <input
              value={formData.institute}
              onChange={(e) => {
                setFormData({ ...formData, institute: e.target.value });
              }}
              contact_type="text"
              id="company"
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
              required
            />
            <span className="text-sm dark:text-white">
              Who do you work for?
            </span>
          </div>

          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="agency"
            >
              Designation (if agency)
            </label>
            <input
              value={formData.designation}
              onChange={(e) => {
                setFormData({ ...formData, designation: e.target.value });
              }}
              contact_type="text"
              id="agency"
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-8 w-full max-sm:flex-col max-sm:gap-4">
          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="email"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              contact_type="email"
              id="email"
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
              required
            />
          </div>

          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              contact_type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
            />
          </div>
        </div>

        {/* Job & Industry */}
        <div className="flex gap-8 w-full max-sm:flex-col max-sm:gap-4">
          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="job"
            >
              Job Title
            </label>
            <input
              value={formData.job_title}
              onChange={(e) => {
                setFormData({ ...formData, job_title: e.target.value });
              }}
              contact_type="text"
              id="job"
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
            />
          </div>

          <div className="flex-col flex w-1/2 max-sm:w-full">
            <label
              className="text-lg font-medium dark:text-white"
              htmlFor="industry"
            >
              Type
            </label>
            <select
              value={formData.contact_type}
              onChange={(e) => {
                setFormData({ ...formData, contact_type: e.target.value });
              }}
              id="industry"
              className="px-4 py-2 border border-black/60 w-full max-sm:py-1"
            >
              <option value="">Select an Type</option>
              {industry.map((i) => (
                <option key={i.id} value={i.value} className="dark:text-white">
                  {i.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interested */}
        {/* <div className="w-full">
          <p className="text-lg font-medium dark:text-white">
            I am interested in... <span className="text-red-600">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2 max-sm:grid-cols-1 max-sm:gap-2">
            {interestedCheckbox.map((c) => (
              <div key={c.id} className="flex items-center">
                <input
                  contact_type="checkbox"
                  id={c.value}
                  name={c.value}
                  value={c.value}
                  required
                />
                <label className="ml-2 dark:text-white" htmlFor={c.value}>
                  {c.label}
                </label>
              </div>
            ))}
          </div>
        </div> */}

        {/* Textarea */}
        <div className="w-full">
          <label className="text-lg font-medium dark:text-white" htmlFor="help">
            Write a message...
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            rows={4}
            id="help"
            className="px-4 py-2 border border-black/60 w-full mt-2 max-sm:py-1"
          ></textarea>
          <button
            contact_type="submit"
            className="px-6 py-2 mt-4 uppercase rounded-full bg-black text-white border-black dark:bg-[#EB0027] dark:hover:bg-transparent dark:hover:border-[#EB0027] dark:hover:text-[#EB0027] max-sm:text-sm max-sm:px-4 max-sm:py-1"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
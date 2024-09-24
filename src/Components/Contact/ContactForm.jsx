import { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
  // const togglePopup = () => {
  //   setShowPopup(true);
  //   setAnimatePing(true);

  //   // Remove ping animation after a short duration
  //   setTimeout(() => {
  //     setAnimatePing(false);
  //   }, 1000); // Adjust duration as needed
  // };

  return (
    <div className="ContactUs my-8">
      <section className="relative bg-white px-4 py-8 md:py-10 z-10 mt-4 md:mt-14 mb-6 md:mb-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
            <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
              Get in Touch
            </span>{" "}
            with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6">
            Have any questions, feedback, or need assistance? We're just a
            message away.
            <br /> Fill out the form below, and our team will get back to you
            shortly.
          </p>
        </div>
      </section>

      <section className="py-2 px-4 md:px-6 bg-white rounded-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="lg:w-3/5 space-y-4">
            <div className="bg-white p-6 lg:p-8 rounded-lg border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4" />
                  <a href="mailto:support@baoiam.com" className="underline">
                    support@baoiam.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-4" />
                  <a href="tel:08069640635" className="underline">
                    08069640635
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4" />
                  <a href="#" className="underline">
                    B Block Noida Sector 15 Uttar Pradesh
                  </a>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-6">
                <Link
                  to="https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaFacebook size={22} />
                </Link>
                <Link
                  to="https://www.instagram.com/baoiam_innovations/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaInstagram size={22} />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaLinkedin size={22} />
                </Link>
                <Link
                  to="https://twitter.com/BAOIAM1"
                  target="_blank"
                  className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
                >
                  <FaSquareXTwitter size={22} />
                </Link>
              </div>

              <div className="h-56 w-full mt-6 md:mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56778.23569201361!2d77.29743635795448!3d28.56460407812812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3036ecb3b95%3A0x927e51f17b1aeb5b!2sB%20Block%2C%20Sector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201021!5e0!3m2!1sen!2sin!4v1694209323043"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContactFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CountryCode: "+91",
    Course: "",
    Consent: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowPopup(true);
    // Prepare the data to be sent in the POST request
    console.log("formData: ", formData.Name);
    const data = {
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      CountryCode: formData.CountryCode,
      Course: formData.Course,
      Consent: formData.Consent,
    };

    console.log("Form Data:", data);

    // try {
    //   const response = await axios.post(
    //     "https://script.google.com/macros/s/AKfycbyrM_x9q5m5qMwJ814X2g9rdKYWGne8bmZ5nzIZ0xY0ppGnzTOl5jsUGKlALnPgnEEI/exec",
    //     data,
    //     {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     }
    //   );

    //   console.log("Form successfully submitted:", response.data);
    //   // toast.success("Form submitted successfully");
    //   setShowPopup(true);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   toast.error("An error occurred");
    //   console.error("Error submitting form", error);
    // }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-150">
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
              className={`text-green-500 mx-auto mb-4 ${
                animatePing ? "animate-ping" : ""
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
      {showForm && (
        <div className="lg:w-2/5 bg-white p-4 md:p-6 lg:p-8 mx-auto  rounded-lg border fixed inset-0 flex flex-col items-center justify-center z-100">
          <p
            className="mb-5 py-1 px-2  rounded-sm cursor-pointer bg-red-500"
            onClick={() => {
              setShowForm(false);
            }}
          >
            X
          </p>
          <h2 className="text-xl md:text-3xl text-center font-bold md:mb-8 mb-4">
            Ready to enhance your skills?
            <br />
            <span className="text-base font-medium">
              Share your details and hear from us soon
            </span>
          </h2>
          <form
            id="form1"
            className="space-y-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your E-mail"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number with Country Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative inline-block">
                <label
                  htmlFor="countryCode"
                  className="block text-gray-700 mb-2"
                >
                  Country Code
                </label>
                <select
                  id="countryCode"
                  name="CountryCode"
                  className="border p-3 pr-8 rounded focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="+91">🇮🇳 +91 (India)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center justify-center mt-5 pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500" />
                </div>
              </div>

              <div className="col-span-2">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="Phone"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  minLength="10"
                  maxLength="10"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="relative inline-block w-full">
              <select
                id="courses"
                name="Course"
                className="border p-3 pr-10 rounded focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer"
                required
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="Web Development">Web Development</option>
                <option value="English speaking/Public speaking">
                  English speaking/Public speaking
                </option>
                <option value="Creative writing">Creative writing</option>
                <option value="Art and craft (DIY)">Art and craft (DIY)</option>
                <option value="Critical Thinking & Problem Solving">
                  Critical Thinking & Problem Solving
                </option>
                <option value="Life Skills">Life Skills</option>
                <option value="Photography & Editing Skills">
                  Photography & Editing Skills
                </option>
                <option value="Technology Development with AI & Coding">
                  Technology Development with AI & Coding
                </option>
                <option value="Entrepreneurship & Innovation(Junior Program)">
                  Entrepreneurship & Innovation(Junior Program)
                </option>
                <option value="Social Media and Digital Marketing">
                  Social Media and Digital Marketing
                </option>
                <option value="Finance Education">Finance Education</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Product Management">Product Management</option>
                <option value="Android Development">Android Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Entrepreneurship & Innovation(Pre University)">
                  Entrepreneurship & Innovation(Pre University)
                </option>
                <option value="SEO Development">SEO Development</option>
                <option value="Machine Learning with AI">
                  Machine Learning with AI
                </option>
                <option value="International Business">
                  International Business
                </option>
                <option value="Emotional Intelligence">
                  Emotional Intelligence
                </option>
                <option value="Executive & Public Relations Content Writing">
                  Executive & Public Relations Content Writing
                </option>
                <option value="Data Science">Data Science</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoIosArrowDown className="text-gray-500" />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-center">
              <input
                id="consent"
                name="Consent"
                type="checkbox"
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                onChange={handleChange}
                required
              />
              <label htmlFor="consent" className="text-gray-700">
                I consent to receiving updates and notifications from online
                Baoiam and its affiliates via email, SMS, WhatsApp, and voice
                call, overriding any DNC/NDNC preference.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactUs;

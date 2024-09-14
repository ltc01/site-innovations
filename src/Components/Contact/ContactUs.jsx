// import React from 'react';
// import { IoCallSharp } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

// const ContactUs = () => {
//   return (
//     <div className="flex flex-col -mt-20 md:flex-row justify-between items-center p-8 min-h-screen">
//       <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
//         <h2 className="text-4xl text-center md:text-left text-orange-400">
//           Connect with us for more information!
//         </h2>
//         <p className="mt-4 text-gray-600 text-center md:text-left">
//           Do you have any queries? Reach out to us and we are happy to help you!
//         </p>

//         <div className="mt-8 flex flex-col space-y-6">
//           <div className="flex items-center mb-4">
//             <div className="bg-orange-300 p-4 rounded-full">
//               <IoCallSharp size={25} />
//             </div>
//             <div className="ml-4">
//               <p className="text-gray-700">Call now:</p>
//               <p className="text-xl font-semibold text-gray-900">08069640635</p>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <div className="bg-orange-300 p-4 rounded-full">
//               <IoIosMail size={25} />
//             </div>
//             <div className="ml-4">
//               <p className="text-gray-700">Email:</p>
//               <p className="text-xl font-semibold text-gray-900">tutors@baoiam.com</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Contact Form */}
//       <div className="md:w-1/2 bg-gradient-to-r from-orange-300 to-orange-500 p-8 rounded-xl shadow-2xl flex flex-col justify-center items-center">
//         <h3 className="text-2xl mb-6 text-center text-white font-medium">
//           Send a Message
//         </h3>
//         <form className="w-full text-center">
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border border-orange-500 p-4 shadow-2xl rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="border border-orange-500 shadow-2xl p-4 rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Phone No."
//               className="border border-orange-500 p-4 shadow-2xl rounded-full focus:outline-none focus:border-2 focus:border-orange-600"
//               required
//             />

//             <div className="relative inline-block w-full">
//               <select
//                 className="border border-orange-500 p-4 pr-8 rounded-full focus:outline-none shadow-2xl focus:border-2 focus:border-orange-600 appearance-none w-full text-sm md:text-base bg-white"
//                 required
//               >
//                 <option value="">Select Course</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Product Management">Product Management</option>
//                 <option value="Android Development">Android Development</option>
//                 <option value="Digital Marketing">Digital Marketing</option>
//                 <option value="Data Science">Data Science</option>
//                 <option value="Graphic Design">Graphic Design</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="Human Resource">Human Resource</option>
//                 <option value="Entrepreneurship">Entrepreneurship</option>
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <IoIosArrowDown className="text-gray-500" />
//               </div>
//             </div>
//           </div>
//           <textarea
//             placeholder="Your Message"
//             className="border border-orange-400 p-4 shadow-2xl rounded-lg mt-4 w-full focus:outline-none focus:border-2 focus:border-orange-600"
//             rows="5"
//           />
//           <button
//             type="submit"
//             className="bg-orange-600 border border-black text-white px-6 py-3 rounded-full mt-4 hover:bg-orange-300 hover:text-white hover:shadow-lg w-full md:w-1/3 transition-transform duration-300 ease-in-out"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from 'react';

import background from "../../assets/ContactUs/background.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHeadset, faInfoCircle, faUsers, faUserGroup, faHandshake } from '@fortawesome/free-solid-svg-icons';


import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


const ContactUs = () => {
  document.title = 'Baoiam - Contact Us'
  return (
    <div className="ContactUs">

      <section className="bg-cover bg-center min-h-screen h-auto text-center text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12" style={{ backgroundImage: `url(${background})` }}>
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">How can we help?</h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-center">Get in touch and let us know how we can help.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mt-8 md:mt-10 w-full">
            {[
                {
                  title: 'Contact sales',
                  description: 'Talk to our sales team about purchasing',
                  buttonText: 'Contact Sales',
                  icon: <FontAwesomeIcon icon={faPhoneAlt} className="text-indigo-600 text-3xl sm:text-4xl absolute top-4 sm:top-5 left-4 sm:left-5" />,
                },
                {
                  title: 'Contact support',
                  description: 'Submit a request to get help from our friendly support experts',
                  buttonText: 'Get Support',
                  icon: <FontAwesomeIcon icon={faHeadset} className="text-indigo-600 text-3xl sm:text-4xl absolute top-4 sm:top-5 left-4 sm:left-5"/>,
                },
                {
                  title: 'Visit our help center',
                  description: 'Read helpful articles, watch tutorials, and get help',
                  buttonText: 'Help Center',
                  icon: <FontAwesomeIcon icon={faInfoCircle} className="text-indigo-600 text-3xl sm:text-4xl absolute top-4 sm:top-5 left-4 sm:left-5"/>,
                },
                {
                  title: 'Community',
                  description: 'Search, share, and learn from other scheduling enthusiasts',
                  buttonText: 'Join Community',
                  icon: <FontAwesomeIcon icon={faUsers} className="text-indigo-600 text-3xl sm:text-4xl absolute top-4 sm:top-5 left-4 sm:left-5"/>
                }
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-64 md:h-80 w-60 md:w-72 p-4 md:p-6 bg-white rounded-2xl shadow-lg border-2 transition-transform transform hover:scale-105 group"
              >
                <div className="flex justify-center">
                  {card.icon}
                 
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-black font-semibold pt-2 mt-8 sm:mt-10 text-left">
                        {card.title}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 mt-4 sm:mt-5 font-sans text-left">
                        {card.description}
                    </p>
                </div>


                <div className="flex justify-center mt-auto">
                    <p className="text-indigo-700 font-semibold text-lg sm:text-xl lg:text-2xl text-left space-x-2 group-hover:text-black transition-colors">
                        {card.buttonText}
                        <span className="text-indigo-700 group-hover:text-black text-2xl sm:text-3xl ml-2">→</span>
                    </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      

      <section className="py-16 mt-8 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8">More ways to reach us</h2>
        <p className="text-gray-500 text-xl md:text-2xl font-semibold mx-4 md:mx-0">
          Need some content about joining us in a partner or career adventure!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-32 mt-16 md:mt-24 cursor-pointer">
          {[
            {
              title: 'Join our team',
              description: 'Interested in applying for a position? View our careers page for open positions and apply.',
              buttonText: 'Join Sales',
              icon: <FontAwesomeIcon icon={faUserGroup} className="text-indigo-600 text-4xl absolute top-4 left-6" />,
            },
            {
              title: 'Become a partner',
              description: 'For general queries, including partnership opportunities.',
              buttonText: 'Get in touch with partners',
              icon: <FontAwesomeIcon icon={faHandshake} className="text-indigo-600 text-4xl absolute top-4 left-6" />,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 border h-80 md:h-72"
            >
              <div className="flex justify-center">{card.icon}</div>

              <div>
                <h2 className="text-2xl md:text-3xl text-black font-semibold pt-2 text-left mt-10">{card.title}</h2>
                <p className="text-gray-600 text-base md:text-lg mt-5 font-sans text-left">{card.description}</p>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center">
                <p className="text-indigo-700 font-semibold text-base md:text-lg group-hover:text-black transition-colors">
                  {card.buttonText}
                  <span className="text-indigo-700 group-hover:text-black text-2xl md:text-3xl ml-2">→</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="py-16 px-4 md:px-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">Connect with us</h2>
          <p className='text-gray-500 text-xl font-sans mb-8'>Do you have any queries? Reach out to us and we are happy to help you!</p>
          <p className="mb-4 flex items-center text-xl font-semibold gap-1">
            <FaPhone className="text-indigo-700 mr-2 text-3xl" />
            08069640635
          </p>
          <p className="mb-4 flex items-center text-xl font-semibold gap-1">
            <FaEnvelope className="text-indigo-700 mr-2 text-3xl" />
            tutors@baoiam.com
          </p>
          <p className="mb-4 flex items-center text-xl font-semibold gap-1">
            <FaMapMarkerAlt className="text-indigo-700 mr-2 text-3xl" />
            B Block Noida Sector 15 Uttar Pradesh
          </p>
          <div className="h-56 w-96 mt-10">
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

          <div className='mt-12'>
            <p className='font-semibold text-2xl text-gray-700'>Socials</p>
            <div className=" flex flex-row gap-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-500 hover:text-black">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-500 hover:text-black">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-500 hover:text-black">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-500 hover:text-black">
                <FaLinkedinIn />
              </a>
            </div>
         </div>

        </div>


        <div className="w-full max-w-2xl bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
            Get in Touch
          </h2>
          <div className="p-6 rounded-xl flex flex-col justify-center items-center">
            <form className="w-full space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-1 rounded focus:outline-none focus:border-2 focus:border-indigo-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 rounded focus:outline-none focus:border-2 focus:border-indigo-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone No."
                  className="border p-2 rounded focus:outline-none focus:border-2 focus:border-indigo-500"
                  required
                />
                <div className="relative inline-block w-full">
                  <select
                    className="border p-2 pr-8 rounded focus:outline-none focus:border-2 focus:border-indigo-500 appearance-none w-full bg-white"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Android Development">Android Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <IoIosArrowDown className="text-gray-500" />
                  </div>
                </div>
              </div>
              <textarea
                placeholder="Your Message"
                className="border p-4 rounded-lg mt-4 w-full focus:outline-none focus:border-2 focus:border-indigo-500"
                rows="5"
              />
              <button
                type="submit"
                className="font-semibold text-base sm:text-lg bg-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full mt-4 hover:bg-white hover:text-indigo-500 border-2 hover:border-indigo-500 focus:outline-none w-full sm:w-1/2 transition-transform duration-300 ease-in-out"
              >
                Submit
              </button>

            </form>
          </div>
        </div>

      </section>

      <section className="py-8 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">Join us on WhatApp</h2>
        <p className="mb-6 text-gray-500 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
          Join our <span className='text-amber-600 font-semibold'>WhatsApp Community</span>, our exclusive community of the world's most passionate Observability pros.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 font-semibold text-white py-2 px-4 md:py-3 md:px-6 rounded-md transition-transform transform hover:scale-105">
          Join Now
        </button>
      </section>
      
    </div>

  );
};

export default ContactUs;

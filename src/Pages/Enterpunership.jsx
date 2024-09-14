import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { School } from "../Data";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import { MdCheck } from "react-icons/md";
import Faq from "./Faq";

import img1 from "../assets/ITIE&Entre/Entrepreneurship/img1.png";
import img2 from "../assets/ITIE&Entre/Entrepreneurship/img2.png";
import img3 from "../assets/ITIE&Entre/Entrepreneurship/img3.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { WiStars } from "react-icons/wi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummy1 from "../assets/ITIE&Entre/ITIE/dummy1.png";
import dummy2 from "../assets/ITIE&Entre/ITIE/dummy2.png";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights"
import { PHero } from "../assets/assets";

import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";

const testimonials = [
  {
    img: dummy2,
    name: "Preet Rajput",
    title: "Entrepreneur",
    content:
      "Started training at BAOIAM and got placed as a Entrepreneur with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Lavanya Singh",
    title: "Entrepreneur",
    content:
      "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me.",
  },
  {
    img: dummy1,
    name: "Trisha Jain",
    title: "Entrepreneur",
    content:
      "Trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },
  {
    img: dummy2,
    name: "Rituraj Datta",
    title: "Entrepreneur",
    content:
      "Started training at BAOIAM and got placed as a Entrepreneur with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career..",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Entrepreneur",
    content:
      "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
];

const cards = [
  {
    number: "01",
    title: "Importance of Entrepreneurship Programs for Women",
    description:
      "Provide a platform for women to explore and pursue their passions while equipping them with essential skills and knowledge to navigate the business world. Foster financial independence, empowering women to control their futures autonomously, and create opportunities for personal and professional growth, driving success and economic empowerment for women in diverse industries.",
  },
  {
    number: "02",
    title: "Future Outlook for Women in Entrepreneurship Programs",
    description:
      "Continued growth in women-owned businesses contributes significantly to the economy, with increased opportunities and support for women entrepreneurs. Focusing on digitalization as a key facilitator for women-owned start-ups enables them to thrive, innovate, and expand in various industries. This support fosters economic progress and empowers women to lead successful ventures.",
  },
  {
    number: "03",
    title: "Opportunities Created by Entrepreneurship Programs",
    description:
      "Building a trustworthy and talented team is key to success. Emphasizing communication, collaboration, and mutual elevation within the team. Acknowledging that teamwork is essential, and setting achievable goals consistently leads to success. Entrepreneurship programs open doors for women to establish their brands and contribute to various industries. Learning and adapting from experiences, building on smaller successes to achieve larger goals.",
  },
];

const Enterpunership = () => {
  document.title = 'Baoiam - Entrepreneurship'
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  const { id } = useParams();
  const course = School.find((cate) =>
    cate.subCate.find((subCate) => subCate.id === parseInt(id))
  );
  // const subCourse = course.subCate.find((subCate) => subCate.id === parseInt(id));

  const navigate = useNavigate();

  // console.log(subCourse);

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => swiper.slideNext();
  const handlePrevClick = () => swiper.slidePrev();

  // For maping icons dynamically
  const highlightIcons = (icon) => {
    if (icon.startsWith("Md")) {
      return MDIcons[icon];
    } else if (icon.startsWith("Fc")) {
      return FCIcons[icon];
    } else if (icon.startsWith("Gr")) {
      return GRIcons[icon];
    } else if (icon.startsWith("Sl")) {
      return SLIcons[icon];
    } else if (icon.startsWith("Go")) {
      return GOIcons[icon];
    } else if (icon.startsWith("Pi")) {
      return PiIcons[icon];
    } else {
      return "not found";
    }
  };

  return (
    <div>
      {/*//! Banner */}
      <div className="flex items-center flex-col gap-12 mt-8 md:mt-0 md:gap-8 lg:gap-0 md:flex-row px-8 md:px-20 w-full h-full md:h-[90vh]">
  {/* Image Section */}
  <div className="w-full md:w-[40%]">
    <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] rounded-3xl overflow-hidden">
      <img
        src="https://images.stockcake.com/public/7/e/0/7e0f0d57-b367-441d-9530-b81b5378344f_large/botanical-store-owner-stockcake.jpg"
        className="w-full h-full object-cover"
        alt="Entrepreneurship"
      />
    </div>
  </div>

  {/* Text Section */}
  <div className="w-full text-center md:text-left lg:text-center md:w-[60%]">
    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
      <span className="text-indigo-600">ENTREPRENEURSHIP</span> Course
    </h1>

    <p className="mt-4 pb-5 text-sm sm:text-lg md:text-xl">
      Welcome to <strong>BAOIAM</strong>, the premier learning platform
      exclusively for women entrepreneurs! Ignite your entrepreneurial spirit
      and embark on your journey to success. As a launchpad for aspiring
      entrepreneurs, we empower you to learn, innovate, and achieve success.
    </p>

    <button className="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 sm:px-10 md:px-12 py-3 mt-8 lg:mt-16 text-sm sm:text-base dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full hover:text-indigo-600 group">
      <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <IoIosArrowRoundForward size={30} />
      </span>
      <span className="relative">Attend Info Session</span>
    </button>
  </div>
</div>

      {/* <div className="relative h-auto md:h-screen   mx-10">
        <div className="hidden sm:block absolute inset-0">
          <img
            src={img1}
            alt="Women Entrepreneurs"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center md:items-end px-4 md:px-10 h-full ">
          <div className="max-w-xl  text-center md:text-center border-2  border-indigo-500 sm:border-none  rounded-lg">
            <h1 className="text-3xl md:text-6xl font-bold text-indigo-600">
              ENTREPRENEURSHIP
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Course
            </h2>
            <p className="mt-4 pb-5 sm:text-lg md:text-2xl text-gray-800 ">
              Welcome to <strong>BAOIAM</strong>, the premier learning platform
              exclusively for women entrepreneurs! Ignite your entrepreneurial
              spirit and embark on your journey to success. As a launchpad for
              aspiring entrepreneurs, we empower you to learn, innovate, and
              achieve success.
            </p>
          </div>
        </div>
      </div> */}

      {/*//! Program Overview */}
      <div className="p-6 md:p-10">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    {/* Heading Section */}
    <div className="text-center my-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-600">
        Program <span className="text-black dark:text-white">Overview</span>
      </h1>
    </div>

    {/* Content Section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Image Section */}
  
      {/* Text Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 md:ml-8 lg:ml-10">
        <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light mb-10">
          Our Entrepreneurship Courses are formulated in a way that can be
          easily studied and comprehended. We offer a plethora of courses that
          are skill-centric and are purely based on practical applications.
          Students can learn new skills or even hone their existing skills. This
          gives them a chance to build a strong skillset that can propel them to
          a new level in their professional lives.
        </p>
        <div className="text-indigo-600 font-medium mt-4">
          ⏳ Enrollment Deadline Approaching Soon!
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0">
        <div className="relative">
          <img
            src="https://images.stockcake.com/public/e/f/c/efc4e6ed-97e3-4349-b133-8c83211049e6_large/businesswomen-discussing-outdoors-stockcake.jpg"
            alt="Person"
            className="rounded-2xl w-full object-cover h-72 sm:h-96 md:h-full"
          />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* //!Course Highlights */}
      <CourseHighlights />

      {/* //!Importance and Opportunities */}

      <div className="py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-8">
      Importance and <span className="text-indigo-600">Opportunities</span>
    </h2>

    {/* Cards Container */}
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6 mt-10 md:mt-16">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-xl border border-gray-200 bg-white hover:scale-105 hover:border-gray-500 hover:shadow-2xl transition-transform duration-300 ease-in-out p-6 sm:p-8 w-full md:w-1/3 lg:w-1/4 min-h-[300px] flex flex-col justify-between"
        >
          <div>
            {/* Card Number */}
            <h3 className="text-center text-2xl sm:text-3xl font-bold mb-4">
              {card.number}
            </h3>

            {/* Card Title */}
            <h4 className="text-xl sm:text-xl font-semibold text-indigo-600 mb-4">
              {card.title}
            </h4>

            {/* Card Description */}
            <p className="text-gray-700 mt-8 leading-relaxed text-justify text-sm sm:text-base">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* //!Women Entrepreneurship Program */}
      <div className="p-6 md:p-10">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    {/* Heading Section */}
    <div className="text-center my-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
      <span className="text-indigo-600">Women</span>   Entrepreneurship
      </h2>
    </div>

    {/* Content Section: Image and Text */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 md:ml-8 lg:ml-10">
        <p className="text-base sm:text-lg md:text-xl font-light mb-8">
          Our Women Entrepreneurship Program aims to support and empower women
          in starting and growing their businesses. This program is specially
          pieced together by our experts to guide our women entrepreneurs and to
          teach them to build their strong business empires. It typically
          includes mentorship, training, and resources to enhance skills, foster
          networking, and overcome challenges women may face in the business
          world. The goal is to promote economic independence and gender
          equality.
        </p>
        <div className="text-black font-bold mt-4">
          ⏳ Enrollment Deadline Approaching Soon!
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0">
        <div className="relative">
          <img
            src={img3}
            alt="Person"
            className="rounded-2xl w-full object-cover h-72 sm:h-96 md:h-full"
          />
        </div>
      </div>
    </div>
  </div>
</div>



      {/*//! Testimonials */}
      <div>
        <h1 className="text-[2rem] md:text-5xl text-center font-semibold my-8 md:my-14">
          Our <span className="text-indigo-600">Testimonials</span>
        </h1>

        <div className="relative w-full px-4 md:px-10 pb-10 md:pb-20">
          <Swiper
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="border border-indigo-600 shadow-xl rounded-2xl text-center mt-10 px-6 md:px-10 flex flex-col py-10 w-full h-96">
                  <img
                    className="w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full object-cover"
                    src={testimonial.img}
                    alt="Student img"
                  />
                  <h3 className="text-lg md:text-xl text-gray-800 font-bold mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    {testimonial.title}
                  </p>
                  <p className="mt-2 text-gray-500">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev md:p-2"></div>
          <div className="swiper-button-next md:p-2"></div>
        </div>
      </div>

      {/*//! Join with us */}

      {/* <div className="my-12 px-8 lg:px-24 w-full h-full">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl  md:px-8">
            <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 md:mb-8 lg:text-4xl xl:mb-12">
              Join With Us Find the{" "}
              <span className="text-orange-500 border-b border-orange-500">
                Right Course
              </span>
            </h2> */}

            {/* <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                        {subCourse.plans.map((p, i) => {
                            return (
                                <div key={i} className={`flex flex-col rounded-lg border ${p.name === "Premium" ? "border-orange-500 relative" : ""} p-4 pt-6`}>
                                    <div className="mb-12">
                                        {p.name === "Premium" && (
                                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                                <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
                                            </div>
                                        )}
                                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">{p.name}</div>
                                        <p className="mx-auto mb-8 px-8 text-center text-gray-500 font-medium">{p.courseName}</p>

                                        <div className="space-y-2">
                                            {p.courseItems.map((item, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <MdCheck size={22} className='text-orange-500' />
                                                    <span className="text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-col gap-8">
                                        <div className="flex items-end justify-center gap-1">
                                            <span className="self-start text-gray-600">₹</span>
                                            <span className="text-4xl font-bold text-gray-800">{p.price}</span>
                                            <span className="text-gray-500">/Full Course</span>
                                        </div>

                                       
                                        <button
                                            className={`block rounded-lg ${p.name === "Premium" ? "bg-orange-500 text-white" : "bg-gray-500"} px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}
                                            onClick={() => navigate('/maintenance')}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div> */}

            {/* <div className="text-center text-sm text-gray-500 sm:text-base">
              Need help deciding?{" "}
              <a
                href="#"
                className="text-gray-600 underline transition duration-100 hover:text-orange-600 active:text-orange-400"
              >
                Get in touch
              </a> */}
              .
            {/* </div>
          </div>
        </div>
      </div> */}

      {/*//! Emi & Placement */}
      {/* <div className="flex items-center flex-col md:flex-row gap-8 lg:justify-around px-8 lg:px-24 my-12 lg:my-32 ">
        <div className="border border-orange-500 rounded-3xl px-6 py-4 shadow-xl md:w-[35rem] ">
          <p className="text-center font-semibold text-orange-500 text-[1.2rem] lg:text-2xl mb-2">
            Easy EMI
          </p>
          <p className="text-neutral-600 mb-2 text-sm lg:text-base">
            Easy monthly payment options with our emi facilities
          </p>

          <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
            <li className="text-sm lg:text-base">
              No upfront payment required
            </li>
            <li className="text-sm lg:text-base">Fixed monthly installments</li>
            <li className="text-sm lg:text-base">Flexible repayment options</li>
          </ul>
        </div>

        <div className="border border-orange-500 rounded-3xl px-6 py-4 shadow-xl md:w-[35rem] lg:h-[11.5rem] h-auto">
          <p className="text-center font-semibold text-orange-500 text-[1.2rem] lg:text-2xl mb-2">
            Pay After Placement
          </p>
          <p className="text-neutral-600 mb-2 text-sm lg:text-base">
            Pay only when you get placed with our Pay After Placement support
          </p>

          <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-neutral-600'>
            <li className="text-sm lg:text-base">
              With our Pay After Placement program, you invest in your career
              development now and pay us only when yoy land a job.
            </li>
          </ul>
        </div>
      </div> */}

      {/*//! Amazing Career */}
      {/* <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-gradient-to-r from-orange-400 to-orange-600 text-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
          Amazing <span className="border-b">Career</span>
        </h4>
        <p className="text-sm lg:text-lg">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col  md:flex-row gap-5 sm:gap-11  justify-center md:w-full mt-8 ">
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div> */}

      {/*//! Faq */}
      <Faq />
    </div>
  );
};

export default Enterpunership;

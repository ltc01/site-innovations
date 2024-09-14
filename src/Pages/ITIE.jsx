import React from "react";
import { useNavigate } from 'react-router-dom';
import img2 from '../assets/ITIE&Entre/ITIE/img2.jpeg'
import intern1 from '../assets/ITIE&Entre/ITIE/intern1.jpg'
import productm from '../assets/ITIE&Entre/ITIE/productm .png'
import hr from '../assets/ITIE&Entre/ITIE/hr.png'
import dataanalytics from '../assets/ITIE&Entre/ITIE/dataanalytics.png'
import seo from '../assets/ITIE&Entre/ITIE/seo.png'
import webd from '../assets/ITIE&Entre/ITIE/webd.png'
import uiux from '../assets/ITIE&Entre/ITIE/uiux.png'
import gaphicsdesigning from '../assets/ITIE&Entre/ITIE/gaphicsdesigning.png'
import businesscomm from '../assets/ITIE&Entre/ITIE/businesscomm.png'
import marketing from '../assets/ITIE&Entre/ITIE/marketing.png'


import { PiGraduationCapFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Faq from './Faq'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummy1 from '../assets/ITIE&Entre/ITIE/dummy1.png'
import dummy2 from '../assets/ITIE&Entre/ITIE/dummy2.png'

const highlights = [
  { title: "Live Online Classes", description: "At your own schedule" },
  { title: "Mobile Friendly", description: "No Laptop? No Problem" },
  { title: "Paid Internship Opportunities", description: "To Build Your Career" },
  { title: "Certificate of Completion", description: "From Baoiam Trainings" },
  { title: "Live Projects", description: "For hand-on practice" },
  { title: "Doubt Clearing", description: "Through Q&A forum" },
  { title: "Beginner Friendly", description: "No prior knowledge required" },
  { title: "12-20 Weeks Duration", description: "2 hours/week (flexible schedule)" },
  { title: "Downloadable Resource", description: "With Lifetime Access" },
  { title: "Professional trainer accreditation", description: "Study From The Best Tutors" },
];

const courses = [
  {
    title: 'Human Resource',
    duration: '3 months',
    description: 'Empowering People, Building Teams with Baoiam.',
    image: hr,
  },
  {
    title: 'Data Analytics',
    duration: '3 months',
    description: 'Turn Data in your advantage with BAOIAM',
    image: dataanalytics,
  },
  {
    title: 'Marketing',
    duration: '3 months',
    description: 'Make your products/services irresistible.',
    image: marketing,
  },
  {
    title: 'SEO',
    duration: '3 months',
    description: 'Attract website traffic and rank higher.',
    image: seo,
  },
  {
    title: 'Web Development',
    duration: '3 months',
    description: 'From concept to click, web magic made real.',
    image: webd,
  },
  {
    title: 'UI/UX Designing',
    duration: '3 months',
    description: 'Design that sparks curiosity, fuels understanding.',
    image: uiux,
  },
  {
    title: 'Gaphics Designing',
    duration: '3 months',
    description: 'Learn the art of visual imagery.',
    image: gaphicsdesigning,
  },
  {
    title: 'Product Management',
    duration: '3 months',
    description: 'Building products that users love.',
    image: productm,
  },
  {
    title: 'Business Communication',
    duration: '3 months',
    description: 'Mitigate communication barriers.',
    image: businesscomm,
  },
];

const testimonials = [
  {
    img: dummy2,
    name: "Tanisha Rajput",
    title: "Web Developer",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee in Web Development. They helped me in learning with ease which eventually landed me a job for a package of 12 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Prince Raj",
    title: "HR Generalist",
    content: "I started my training at BAOIAM as a HR. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Vijay Poranki",
    title: "Product Manager",
    content: "Trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },
  {
    img: dummy2,
    name: "Rituraj Datta",
    title: "Data Analyst",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee as a Data Analytics. They helped me in learning with ease which eventually landed me a job for a package of 11 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Preetika Rawat",
    title: "Digital Marketer",
    content: "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 13 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Harsha Khirwadkar",
    title: "Graphic Designer",
    content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee. They helped me in learning with ease which eventually landed me a job for a package of 10 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Pracheta Bhanjachowdhuri",
    title: "UI/UX Designer",
    content: "I trained with BAOIAM as a UI/UX Designer and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },

];


const ITIE = () => {
  document.title = 'Baoiam - ITIE'
  const navigate = useNavigate();
  return (
    <div>
      {/* ITIE */}
      <div className="flex flex-col md:flex-row items-center justify-center  bg-white p-6 mx-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Interns <span className="text-orange-500">TEACH</span> Interns <span className="text-indigo-600">EARN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
            ITIE Revolutionizes Internships
          </h2>
          <p className="text-gray-600 mt-6">
            Our mission is all about learning and sharing. Our platform is designed to help you gain knowledge, share your expertise with others, and earn rewards along the way.
          </p>
          <button className="mt-8 bg-gradient-to-r from-indigo-800 to-indigo-500  text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300 py-2 px-6 rounded-full text-lg" onClick={() => navigate('/maintenance')}>
            I AM INTERESTED

          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={img2} alt="Person pointing" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Program Overview */}

      <div className="md:mx-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mt-10 md:my-10">
          Program <span className="text-indigo-600">Overview</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

          <div className="w-full md:w-1/2  justify-center md:justify-start md:mr-4 hidden md:block">
            <img src={intern1} alt="Person" className="rounded-full w-2/3 md:w-4/5 md:ml-20 border-b-8 border-r-8 border-indigo-600 shadow-2xl" />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <p className="text-gray-600 mb-4 text-lg md:text-xl text-justify mx-4 md:mx-0 ">
              ITIE is a program that has been formulated by our team and leading experts for young enthusiasts to build a strong and powerful career path. Through this program, not only do the interns get the chance to learn and hone their skills, but also to monetise their skill by cascading the knowledge they have gained so far into others. Hence, after learning a skill, they will be tested on it and if they clear the tests, they get the opportunity to teach a new intern who wishes to learn the same skill as them. The 'Teacher Interns' will then earn exciting compensation offers and incentives.
            </p>
            <div className="text-red-500 font-medium text-center md:text-left">
              ⏳ Enrollment Deadline Approaching Soon!
            </div>
          </div>
        </div>
      </div>


      {/* Course Highlight */}

      <div className="max-w-7xl mx-4 md:mx-auto p-4 mt-16 mb-20 flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8">
          Course <span className="text-indigo-600">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 px-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`flex items-center space-x-5 ${index !== highlights.length - 1 && index !== 8 ? 'border-b w-full md:w-5/6 border-gray-900' : ''
                } pb-4`}
            >
              <div className="text-indigo-600 text-3xl md:text-4xl">
                <PiGraduationCapFill />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Our courses */}

      <div className="max-w-6xl mx-auto p-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black">
          Our <span className="text-indigo-600">Courses</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-black text-white px-6 py-2 hover:bg-indigo-600 hover:text-amber-50 rounded">
            Plus +
          </button>
          <button className="bg-white text-black border-2 border-black hover:bg-indigo-600 hover:text-amber-50 px-6 py-2 rounded">
            Premium ★
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {courses.map((course, index) => (
            <div key={index} className="border-t-4  border border-indigo-600  rounded-t-3xl rounded-b-md hover:shadow-2xl hover:border hover:scale-105 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4 h-full bg-indigo-200">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center text-sm text-indigo-600 font-bold my-2 ">
                    <span className="text-indigo-600 mr-2"><GoDotFill size={20} />
                    </span>
                    {course.duration}

                  </div>
                  <div className="text-orange-600"><FaPlus />
                  </div>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Our Testimonials */}


      <div className="relative">
        <h1 className="text-3xl md:text-5xl text-center font-semibold my-8 md:my-14 text-black">
          Our <span className="text-indigo-600">Testimonials</span>
        </h1>

        <div className="relative w-full px-4 md:px-1 pb-10 md:pb-20 mx-auto max-w-7xl">
          <Swiper
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
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
                <div className="border border-indigo-600 text-sm md:text-base shadow-xl rounded-2xl text-center mt-10 px-6 md:px-5 flex flex-col py-10 w-full h-96">
                  <img
                    className="w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full object-cover"
                    src={testimonial.img}
                    alt="Student img"
                  />
                  <h3 className="text-lg md:text-xl text-gray-800 font-bold mt-4">{testimonial.name}</h3>
                  <p className="text-gray-600 font-semibold">{testimonial.title}</p>
                  <p className="mt-2 text-gray-500">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev  text-indigo-600 rounded-full p-5 md:p-7 absolute top-1/2 md:left-[-60px] transform -translate-y-1/2 z-10"></div>
          <div className="swiper-button-next  text-indigo-600 rounded-full p-5 md:p-7 absolute top-1/2 md:right-[-60px] transform -translate-y-1/2 z-10"></div>
        </div>
      </div>

      {/* Amazing Career */}

      <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-lg m-3 md:m-10 py-5 md:py-14 px-5 md:px-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center">
          Amazing <span className="text-indigo-600">Career</span>
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-500 font-bold text-center">
          Grab these exclusive offers available only once a year.
        </p>
        <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-44 ">
          <div className="bg-white p-4 md:px-6 lg:px-8 rounded-3xl shadow-2xl text-center border-2 border-indigo-700 w-full md:w-auto">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-indigo-900">BUY 2 COURSES & GET MORE</h2>
            <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-600">15%</p>
            <p className="mt-1 text-base md:text-lg lg:text-xl text-indigo-900">OFF</p>
          </div>
          <div className="bg-white p-4 md:px-6 lg:px-8 rounded-3xl shadow-2xl text-center border-2 border-indigo-700 w-full md:w-auto">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-indigo-900">BUY 3 COURSES & GET MORE</h2>
            <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-600">20%</p>
            <p className="mt-1 text-base md:text-lg lg:text-xl text-indigo-900">OFF</p>
          </div>
          <div className="bg-white p-4 md:px-6 lg:px-8 rounded-3xl shadow-2xl text-center border-2 border-indigo-700 w-full md:w-auto">
            <h2 className="text-sm md:text-base lg:text-lg font-semibold text-indigo-900">BUY 4 COURSES & GET MORE</h2>
            <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-600">25%</p>
            <p className="mt-1 text-base md:text-lg lg:text-xl text-indigo-900">OFF</p>
          </div>
        </div>

      </div>


      {/* FAQ Section */}
      <Faq />


    </div>
  );
};

export default ITIE;
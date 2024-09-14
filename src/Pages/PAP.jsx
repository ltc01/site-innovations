import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner_pap from "../assets/banner_pap.png";
import Chitranshu from "../assets/Chitranshu.jpg";
import Aditya from "../assets/Aditya.jpg";
import Tina from "../assets/Tina.jpg";
import Som from "../assets/Som.jpg";
import Prasun from "../assets/Prasun.jpg";
import Surbhi from "../assets/Surbhi.jpg";
import Prajwal from "../assets/Prajwal.jpg";
import placement from "../assets/placement.jpg";
import {
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  LightBulbIcon,
  DeviceTabletIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { PHero } from "../assets/assets";
import { IoIosArrowRoundForward } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { IoTelescope } from "react-icons/io5";
import { MdPalette } from "react-icons/md";
import { FaGavel, FaGear, FaShield, FaTree } from "react-icons/fa6";
import {
  BsClipboardCheckFill,
  BsFillPuzzleFill,
  BsGraphUpArrow,
  BsMegaphoneFill,
  BsPeopleFill,
  BsRobot,
} from "react-icons/bs";

const PAP = () => {
  document.title = 'Baoiam - PAP'
  const slides = [
    {
      imgSrc: Prasun,
      date: "26 December 2023",
      title: "REVIEW",
      text: "I would recommend all start-up businesses or any entrepreneur in the SMME sector to participate in this entrepreneurship program as it would help many run their businesses with a much more viable and realistic business model.",
    },
    {
      imgSrc: Surbhi,
      date: "12 September 2023",
      title: "REVIEW",
      text: "Being on this entrepreneurship bootcamp really shifted my mindset on a lot of things as an entrepreneur. I look at myself and my business in a different light, I really grow a lot and am really appreciative of BAOIAM for making this opportunity available for me. I have learned and also looking for more ways to grow as a person and business.",
    },
    {
      imgSrc: Prajwal,
      date: "11 January 2024",
      title: "REVIEW",
      text: "I had a wonderful experience throughout this entrepreneurship bootcamp and learned a lot from the team, coaches, and my fellow students. I loved the way the coaches engage with us and also that they were always willing to assist. I wouldn't have traded this for anything.",
    },
  ];


  const contentData = [
    {
      name: "Chitranshu Kankar",
      role: "Sales",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem cum error atque odit sit voluptates, laboriosam nostrum ipsa dicta qui distinctio id aliquam velit.",
      image: Chitranshu,
    },
    {
      name: "John Doe",
      role: "Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt adipisci? Aliquid, quia eum? Vitae, quam! Quisquam, tempora maxime!",
      image: Aditya,
    },
    {
      name: "Jane Smith",
      role: "Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam, doloremque hic amet repellat molestias pariatur dicta atque enim.",
      image: Tina,
    },
    {
      name: "Emily Clark",
      role: "Product Manager",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repudiandae molestiae! Quidem, ratione quaerat tempore corporis optio debitis.",
      image: Som,
    },
  ];
  

  


  return (
    <div className="dark:bg-black dark:text-white overflow-hidden">
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: #f59e0b !important;
            font-size: 20px !important;
          }
          .swiper-button-disabled {
            display: none !important;
          }
        `}
      </style>
      {/* section 1 */}
      <div className="flex items-center flex-col-reverse gap-12 mt-8 md:mt-0 md:gap-0 md:flex-row px-8 md:px-20 w-[100vw] h-full md:h-[90vh]">
        {/* <img src={banner_pap} alt="banner" /> */}

        <div className="w-full text-center md:text-left md:w-[60%]">
          <span className="text-sm text-indigo-700 font-medium justify-center md:justify-normal flex items-center">
            <WiStars className="animate-pulse" size={25} /> Invest in your
            future, pay after it's proven.
          </span>
          <h1 className="text-4xl lg:text-6xl mb-4 font-medium">
            Pay After
            <span className="font-light italic text-indigo-700">
              {" "}
              Placement
            </span>
          </h1>

          <p className="text-sm lg:text-base md:w-3/4">
            The exclusive learning platform for tomorrow's entrepreneur! Fuel
            you entrepreneurship spirit with BAOIAM - "the launchpad for budding
            entrepreneurs: Learn, innovate, succeed"
          </p>

          <button class="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 md:px-12 py-3 mt-12 lg:mt-20 text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full hover:text-indigo-600 group">
            <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span class="relative">Attend Info Session</span>
          </button>
        </div>
        <div className="w-full md:w-[40%]">
          <div className="w-full md:w-72 h-96 lg:size-[30rem] rounded-3xl overflow-hidden">
            <img src={PHero} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="my-6 py-6 text-center">
        <h2 className="lg:leading-[3rem] text-2xl font-bold text-black mb-3 sm:text-3xl  md:text-4xl">
          Mentored By The{" "}
          <span className="text-transparent bg-clip-text bg-indigo-700">
            Visionary Entrepreneurs
          </span>{" "}
          Of Today
        </h2>
        <p className="text-gray-500 font-semibold text-base mb-12">
          Harnessing the wisdom of today's entrepreneurial gems, a new era of
          startup-focused business education is born.
        </p>

        {/* <div className="px-8">
          <div className="flex flex-col bg-white shadow-xl px-8 pb-8 border-t-4 rounded-xl border-indigo-600 w-[30rem]">
            <div className="size-16 relative bottom-8">
              <img
                className="w-full h-full rounded-full object-cover"
                src={Chitranshu}
                alt="image"
              />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-1">
                Chitranshu Kankar
              </h2>
              <p className="text-gray-400">Sales</p>

              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem cum error atque odit sit voluptates, laboriosam nostrum ipsa dicta qui distinctio id aliquam velit.</p>
            </div>
          </div>
        </div> */}

        <div className="lg:px-20 px-10  flex justify-center lg:mx-10 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 640px (small screens)
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px (medium screens)
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px (large screens)
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {contentData.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center pt-12">
                <div className="flex flex-col bg-white shadow-xl px-8 pb-0 border-t-4 rounded-xl border-indigo-700 w-[20rem]  ">
                  <div className="size-16  relative bottom-8 ">
                    <img
                      className="w-full h-full rounded-full object-cover "
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                    <p className="text-gray-400">{item.role}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="flex p-4 pb-12 justify-evenly items-center flex-wrap gap-6">
          <div className=" rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Tina}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-amber-500 font-bold mb-2 text-center">
              Tina Chahelwani
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              Business Analytics
            </p>
          </div>

          <div className=" rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Som}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-amber-500 font-bold mb-2 text-center">
              Som Thirtha
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              Product Management
            </p>
          </div>

          <div className=" rounded-xl hover:shadow-lg max-w-xs sm:max-w-[38%] lg:max-w-[23%] w-full">
            <img
              className="mt-4 mb-2 w-full object-cover"
              src={Aditya}
              alt="image"
            />
            <h2 className="text-transparent bg-clip-text bg-amber-500 font-bold mb-2 text-center">
              Aditya Vishkarma
            </h2>
            <p className="mb-4 text-gray-500 text-lg text-center">
              User Experience
            </p>
          </div>
        </div> */}
      </div>

      {/* section 3 */}
      <div className="flex flex-col items-center text-center pb-5 ">
        <h2 className="text-2xl font-bold text-black sm:text-3xl sm:mb-4 md:text-4xl lg:text-4xl mb-0 mt-5 lg:leading-[1rem] lg:pt-10 md:pt-5">
          Become A{" "}
          <span className="text-transparent bg-clip-text bg-indigo-700 ">
            Budding
          </span>{" "}
          Startup Leader
        </h2>
        <p className="text-gray-500 font-semibold my-8 mx-16 text-base sm:my-4 sm:mx-8 lg:text-lg mt-0">
          Develop an entrepreneurial mindset and become a visionary leader that
          will build nation’s next unicorns
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-3 gap-x-8 text-left text-[#031864] font-semibold  ">
          <ul>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4 py-1 px-2">
                <IoTelescope
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Visionary Thinking
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <MdPalette
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Creativity & Innovation
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <FaShield
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Risk Management
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <FaTree
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Resilience & Persistence
              </span>
            </li>
          </ul>
          <ul>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <BsFillPuzzleFill
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Adaptability
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <FaGavel
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Leadership
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <BsGraphUpArrow
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Financial Management
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-16 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <BsPeopleFill
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Networking & Relationship Building
              </span>
            </li>
          </ul>
          <ul>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-16 lg:w-[350px] flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <BsMegaphoneFill
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Communication & Salesmanship
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-16 lg:w-[350px] flex  items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <FaGear
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Problem Solving
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] flex  items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2  ">
                <BsClipboardCheckFill
                  className="text-indigo-600 group-hover:text-white "
                  size={22}
                />{" "}
                Product Management & Interpersonal Skills
              </span>
            </li>
            <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full text-sm h-14 lg:w-[350px] w-full flex items-center">
              {" "}
              <span className="relative z-10 flex items-center gap-4  px-2">
                <BsRobot
                  className="text-indigo-600 group-hover:text-white"
                  size={22}
                />{" "}
                Leveraging AI & technology for automation
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* section 4 */}
      <div className="flex flex-col items-center lg:pb-14 pb-10 px-8 text-center">
        <h2 className="text-2xl font-bold text-black mb-2 sm:text-3xl md:text-4xl lg:text-4xl lg:leading-[1rem] lg:pt-20 md:pt-5">
          <span className="text-transparent bg-clip-text bg-indigo-700 ">
            Placement
          </span>{" "}
          Hunger For Success
        </h2>
        <p className="text-gray-500 text-base mx-4 mt-2 mb-6 p-4 lg:text-lg font-semibold">
          <span className="text-indigo-800">
            The Placement Bootcamp Program
          </span>
          : A 6 month program for startup founders of tomorrow
        </p>

        <div className="flex lg:flex-row flex-col-reverse sm:items-center items-stretch text-left px-12">
          <div className="w-[90%] mr-6 md:max-w-[70%] lg:max-w-[57%]">
            <p className="ml-10 mb-4 pr-8 text-base text-gray-500 md:text-xl">
              Join us on this transformative journey as we empower you to become
              the driving force behind India's startup ecosystem. Whether you
              have a groundbreaking idea or a burning passion for innovation,
              our business school is the platform.where you can develop the
              skills, knowledge, and mindset to thrive in the ever-evolving
              entrepreneurial landscape.
            </p>
            <p className="ml-10 mb-4 pr-8 text-base md:text-xl text-indigo-800 font-bold">
              Unleash your potential and shape the future of business with us
            </p>

            <button class="relative inline-flex items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 text-white ml-10 p-1.5 w-52 sm:w-52 md:w-48 sm:p-1.5 md:p-2 lg:p-2.5 text-sm overflow-hidden hover:text-indigo-600 font-medium border border-indigo-600 rounded-full group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span class="relative">Click here</span>
            </button>
          </div>

          <div className="max-w-[90%] mx-10 md:max-w-[70%] lg:max-w-[43%] mr-6 mb-6">
            <img
              className="max-w-full max-h-full rounded-2xl object-contain lg:pr-4"
              src={placement}
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="flex flex-col items-center text-center px-12 pt-10">
        <h2 className="text-2xl font-bold text-black mb-2 sm:text-3xl md:text-4xl lg:text-4xl lg:leading-[1rem]">
          Sneak Peek Of{" "}
          <span className="text-transparent bg-clip-text bg-indigo-700 ">
            Bootcamp Program
          </span>
        </h2>
        <p className="mt-4 mx-12 mb-2 px-6 pr-8 text-base font-semibold text-gray-500 pb-4 lg:text-lg">
          A transformational journey designed to create budding founders of
          future unicorns
        </p>

        <div className="flex flex-wrap gap-4 mb-10 py-10 max-w-7xl mx-auto justify-evenly lg:ml-10 lg:mr-10">
          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <AcademicCapIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Foundation and Knowledge Acquisition:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              Lay a strong foundation and acquire the necessary knowledge and
              skills. Study various aspects of entrepreneurship, including
              market analysis, business planning, financial management,
              marketing strategies, and legal considerations. Aims to provide a
              comprehensive understanding of the entrepreneurial landscape and
              equip individuals with the knowledge required to embark on their
              entrepreneurial journey.
            </p>
          </div>

          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <WrenchScrewdriverIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Skill Development and Practical Application:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              Focus on skill development and practical application. Hands-on
              learning experiences, such as workshops, simulations, and
              real-world projects. Activities that enhance their critical
              thinking, problem-solving, communication, and leadership skills.
              To bridge the gap between theory and practice, allowing
              participants to apply their knowledge in real entrepreneurial
              scenarios.
            </p>
          </div>

          <div className="mb-8 flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <UserGroupIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Mentorship, Networking, and Launch:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              Get an opportunity to connect with experienced entrepreneurs,
              industry experts, and mentors who provide guidance and support.
              Receive feedback on their business ideas, refine their strategies,
              and gain valuable insights from those who have already walked the
              entrepreneurial path. Take the leap and launch their own ventures,
              armed with the knowledge, skills, and support acquired during the
              program.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <LightBulbIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Nurturing a leader:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              Leadership plays a very crucial and multifaceted role in
              entrepreneurial business. Therefore, it is important to nurture a
              leader who can set a clear vision for the business, develop a
              decisive attitude, and approach the growth path with optimism. A
              leader plays a key role in team building, resource management,
              networking and partnerships, and ultimately influences the overall
              success and sustainability of the venture. Given the multitude of
              responsibilities that need to be fulfilled, it is crucial to
              receive effective leadership training from industry leaders.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <DeviceTabletIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Exposure to new business trends and technology:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              Stay informed about new businesses and technology is essential for
              identifying the unique factors that set a business apart.
              Utilizing new and advanced technology can improve efficiency,
              productivity, and reduce costs. Know about the latest business
              trends, strategies, and techniques by attending free live
              workshops led by industry experts. Discover more about supply
              chain optimization and other related cutting-edge terms.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] border border-gray-200 rounded-xl shadow-xl flex flex-col justify-start items-center text-center py-8 transition-all duration-400 ease-in-out hover:-translate-y-2 px-4">
            <PresentationChartBarIcon className="h-12 w-12 text-amber-500 mb-4" />
            <p className="text-indigo-700 font-bold mb-4 px-4">
              Business Idea Presentation:
            </p>
            <p className="mb-4 px-4 text-gray-500">
              The final business idea will be presented to a panel of experts
              and potential investors. The most promising ideas will have the
              opportunity to secure investment from the panel. Other business
              ideas will receive feedback, suggestions, and guidance for
              improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col justify-center items-center mb-0 ">
        <h2 className="text-2xl font-bold text-black text-center m-3 mb-5 sm:mb-5 sm:text-3xl md:text-4xl lg:text-4xl lg:pt-10 md:pt-5">
          Baoiam’ions{" "}
          <span className="text-transparent bg-clip-text bg-indigo-700 ">
            Experience
          </span>
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            el: ".swiper-pagination-bullet-custom",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="text-center text-[16px] sm:text-[18px] flex justify-center items-center pt-0  "
            >
              <div className="relative flex flex-col h-auto md:h-[26rem] border-3xl rounded-3xl border-slate-400 mb-12 p-4 sm:p-6 md:p-8  lg:flex-row md:flex-row bottom-20">
                {/* Image Container */}
                <div
                  className="lg:absolute md:absolute  sm:absolute  -left-8  sm:-left-8 top-8 my-8 sm:my-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl opacity-80 z-10 "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="block w-full h-full object-cover rounded-2xl shadow-lg mt-20"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 sm:p-6 rounded-3xl border-slate-400 h-auto shadow-md max-w-[18rem] sm:max-w-xl text-right md:h-[26rem] md:max-w-2xl lg:max-w-3xl">
                  <span className="text-gray-500 text-xs sm:text-sm block mb-2">
                    {slide.date}
                  </span>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-700 mb-2 sm:mb-4">
                    {slide.title}
                  </div>
                  <div className="w-full sm:w-1/2 ml-auto text-gray-500 text-sm sm:text-base  lg:text-lg mb-4 text-left">
                    {slide.text}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Swiper Navigation and Pagination */}
          <div
            className="swiper-button-next swiper-button-next-custom"
            style={{ color: "#f59e0b", fontSize: "20px" }}
          />
          <div
            className="swiper-button-prev swiper-button-prev-custom"
            style={{ color: "#f59e0b", fontSize: "20px" }}
          />
          <div
            className="swiper-pagination-bullet swiper-pagination-bullet-custom"
            style={{ display: "none" }}
          />
        </Swiper>
      </div>
    </div>
  );
};

export default PAP;

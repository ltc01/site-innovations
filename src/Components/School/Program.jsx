import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightArrowLeft, FaChevronRight } from "react-icons/fa6";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Program = ({ title, data }) => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Animation for the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for each button
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: button,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: index * 0.1, // Stagger the animations
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-5 mx-auto lg:w-11/12 mt-10 sm:px-4 xs:px-4" id="courses">
      <h1
        ref={titleRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
      >
        {title} Programs
      </h1>
      <div className="">
        <Swiper
          keyboard={{ enabled: true }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3.5 },
            1200: { slidesPerView: 4 },
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized")}
          className="md:h-[350px] w-full py-4 m-auto flex flex-col justify-center items-center gap-4"
        >
          {data?.map((course, index) => {

            return (
              <SwiperSlide key={index}>
                <div className="h-80 w-fit min-w-56 md:my-4 my-0 bg-gradient-to-r from-teal-50  to-indigo-100 shadow-lg overflow-hidden dark:from-indigo-950  dark:to-teal-700  mx-auto dark:border rounded-xl m-2" >
                  <div className="relative h-[50%]">
                    <img
                      src={'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-4 flex">

                      <span className="text-xs mr-3 flex-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                        Premium
                      </span>

                      <span className="bg-slate-200 flex-1 text-gray-800 rounded-lg text-xs px-3 py-1">
                        Plus
                      </span>
                    </div>
                  </div>
                  <div className="px-4 h-[50%] gap-8 flex flex-col justify-between">
                    <div className="">
                      <h3 className="text-xl font-semibold my-2 text-wrap">{course.title} </h3>
                      {/* <p className="text-sm pr-3 text-slate-600 text-justify">{course.description}</p> */}
                    </div>
                    <div className="flex items-center my-3 gap-4 text-nowrap justify-between w-full ">
                      <button
                        // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
                        className="text-lg font-bold w-fit rounded-md"
                      >
                        ₹ {course.plans[0].price}
                      </button>
                      <button
                        onClick={() => navigate(`/course/${course.title}/${course.id}`)}
                        className="bg-gradient-to-r text-base from-indigo-700 to-indigo-400 text-white px-3 py-1 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300 flex items-center justify-center w-fit rounded-md"
                      >
                        <p>Read More</p>
                        <FaChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Program;
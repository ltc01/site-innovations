import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Program = ({ title, data }) => {
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);
  console.log(data);
  const [selectedCategory, setSelectedCategory] = useState("Category1");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= data?.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  const handleSlideChange = (swiper) => {
    // setCurrentIndex(swiper.realIndex);
  };

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
    <div className="py-5 mx-auto lg:w-10/12 mt-10 sm:px-4 xs:px-4" id="courses">
      <h1
        ref={titleRef}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
      >
        {title} Programs
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 gap-2 md:gap-4">
        {data?.map((course, index) => (
          <Link to={`/course/${course.title}/${course.id}`}
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            className="dark:bg-indigo-600 w-full px-4 py-2 md:px-6 md:py-2 border border-none bg-slate-100 rounded-md text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center gap-4 ">
              <span className="">{course.title}</span>
            </span>
          </Link>
        ))}
      </div> */}
      {/* <div className="mx-4 mt-8 md:mx-14">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0} // Adjust the space between cards
          slidesPerView={1} // Default number of slides per view
          dot={false}
          // loop={true} // Enables loop mode for continuous sliding
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="swiper-container lg:px-6"
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            740: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {data?.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="h-[22.5rem] overflow-hidden dark:bg-indigo-900 dark:border shadow-md rounded-xl m-2">
                <div className="relative h-[50%]">
                  <img
                    src={''}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-3 left-4 flex">

                    <span className="text-xs mr-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                      Premium
                    </span>

                    <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-3 py-1">
                      Plus
                    </span>
                  </div>
                </div>
                <div className="pl-4 h-[45%] flex flex-col justify-between">
                  <div className="">
                    <h3 className="text-xl font-semibold my-2 text-nowrap">{course.title} </h3>
                    <p className="text-sm pr-3 text-slate-600">{course.description}</p>
                  </div>
                  <button
                    // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
                    className="bg-gradient-to-r w-fit mb-4 mt-1 rounded-md text-xs from-indigo-700 to-indigo-400 text-white px-4 py-2 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
                  >
                    View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

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
              <div className="h-80 w-fit min-w-56 my-4 bg-gradient-to-r from-teal-50  to-indigo-100  shadow-lg overflow-hidden dark:from-indigo-950  dark:to-teal-700 dark:border rounded-xl m-2">
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

                    <span  className="bg-slate-200 flex-1 text-gray-800 rounded-lg text-xs px-3 py-1">
                      Plus
                    </span>
                  </div>
                </div>
                <div className="px-4 flex flex-col justify-evenly">
                  <div className="">
                    <h3 className="text-xl font-semibold my-2 text-wrap">{course.title.length <= 20 ?course.title : course.title.slice(0,20)+'...'} </h3>
                    {/* <p className="text-sm pr-3 text-slate-600 text-justify">{course.description}</p> */}
                  </div>
                 {/* <div className="relative h-full"> */}
                 <button
                    // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
                    className="text-lg font-bold absolute bottom-2 w-fit rounded-md"
                  >
                    ₹ {course.plans[0].price}
                  </button>
                 {/* </div> */}
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

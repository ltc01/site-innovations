import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { School } from "../../Data";
// import { courseCategories } from "../../assets/swiper-imgs/categories";
import {categories} from "../../assets/swiper-imgs/categories"; // Import JSON data
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProgramCourses } from '../../redux/slices/courseSlice'; // Adjust the import path as necessary
import { BeatLoader } from "react-spinners";


export default function SliderSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Category1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryKeys = Object.keys(categories);
  console.log(categoryKeys, 'category keys')

  useEffect(() => {
    if (categories[selectedCategory] === undefined) {
      setSelectedCategory(categoryKeys[0]); // Fallback to the first category if the current category is undefined
    }
    console.log(categories,'cate')
    
    if (currentIndex >= categories[selectedCategory]?.length) {
      const nextCategoryIndex =
        (categoryKeys.indexOf(selectedCategory) + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentIndex(0);
    }
  }, [currentIndex, selectedCategory]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };



  // redux start
  const dispatch = useDispatch();
  const { programCourses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if(status==='idle'){
      dispatch(fetchProgramCourses());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return  <div className="flex justify-center items-center h-[90vh]">
                <BeatLoader color="#4F46E5" loading={true} size={15} />
           </div>;;
  }
  // console.log(programCourses, 'program courses')
  // redux end

  return (
    <div className="slider-section dark:bg-[#080529] w-full relative py-20 overflow-hidden ">
      <div className="text-center mb-0 lg:mb-8">
        <h2 className="text-4xl font-bold mb-8">Featured <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent" >Courses</span></h2>
        {/* <div className="flex gap-3 items-center justify-center mt-8 md:mt-0">
          {.map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 border-2 py-2 w-fit text-xs md:text-sm rounded-lg ${
                  selectedCategory === category
                    ? "dark:bg-indigo-900 bg-black text-white rounded-xl text-sm transition-all ease-in-out duration-300"
                    : "bg-white text-black"
                } hover:bg-gradient-to-l hover:scale-105 transition`}
              >
                {category}
              </button>
            )
          )}
        </div> */}
      </div>

      <div className="mx-4 mt-8 md:mx-14">
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
           {status === 'failed' ? categories[selectedCategory]?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[22.5rem] overflow-hidden dark:bg-indigo-900 dark:border shadow-md rounded-xl m-2">
                <div className="relative h-[50%]">
                  <img
                    src={slide.banner}
                    alt={slide.course}
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
                    <h3 className="text-xl font-semibold my-2 text-nowrap">{slide.course || slide.courseName} </h3>
                    <p className="text-sm pr-3 text-slate-600">{slide.desc[0].slice(0, 60) + "..."}</p>
                    
                  </div>
                  <button
                    onClick={() => navigate(`/course/${slide.course}/`)}
                    className="bg-gradient-to-r w-fit mb-4 mt-1 rounded-md text-xs from-indigo-700 to-indigo-400 text-white px-4 py-1 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
                  >
                  View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
          :  programCourses?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[22.5rem] overflow-hidden dark:bg-indigo-900 dark:border shadow-md rounded-xl m-2">
                {/* Image Container */}
                <div className="relative h-[50%]">
                  <img
                    src={slide.thumbnail_image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Price and Duration in the same row */}
                <div className="absolute top-3 left-4 flex">
                 
                    <span className="text-xs mr-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                      Premium
                    </span>
                    {/* Plus button */}
                    <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-3 py-1">
                      Plus
                    </span>
                </div>
                </div>
                <div className="pl-4 h-[45%] flex flex-col justify-between">
                  {/* Title */}
                  <div className="">
                    <h3 className="text-xl font-semibold my-2 text-nowrap">{ slide.title.slice(0, 20) + "..." } </h3>
                    <p className="text-sm pr-3 text-slate-600">{slide.description.slice(0, 60) + "..."}</p>
                    
                  </div>
                  {/* Button */}
                  <button
                    onClick={() => navigate(`/course/${slide.title}/${slide.id}`)}
                    className="bg-gradient-to-r w-fit mb-4 mt-1 rounded-md text-xs from-indigo-700 to-indigo-400 text-white px-4 py-2 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
                  >
                  View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          
          ))
           } 

         
        </Swiper>
      </div>

      {/* Custom Navigation Buttons Positioned on the Sliders */}
      <div className="absolute top-[60%] left-2 transform z-10">
        <button className="swiper-button-prev text-indigo-600 hover:text-white transition"></button>
      </div>
      <div className="absolute top-[60%] right-2 transform z-10">
        <button className="swiper-button-next text-indigo-500 hover:text-white transition"></button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import categories from '../../assets/swiper-imgs/categories.json'; // Import JSON data
import { useNavigate } from 'react-router-dom';

export default function SliderSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Category1');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryKeys = Object.keys(categories);

  useEffect(() => {
    if (categories[selectedCategory] === undefined) {
      setSelectedCategory(categoryKeys[0]); // Fallback to the first category if the current category is undefined
    }

    if (currentIndex >= categories[selectedCategory]?.length) {
      const nextCategoryIndex = (categoryKeys.indexOf(selectedCategory) + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentIndex(0);
    }
  }, [currentIndex, selectedCategory]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="slider-section dark:bg-[#080529] w-full py-10 relative overflow-hidden">
      <div className="text-center mb-0 lg:mb-8">
        <h2 className="text-4xl font-bold mb-4">Explore Our Courses</h2>
        <div className="flex gap-3 items-center justify-center mt-8 md:mt-0">
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 border-2 py-2 w-fit text-xs md:text-sm rounded-lg ${
                selectedCategory === category
                  ? 'dark:bg-indigo-900 bg-black text-white rounded-xl text-sm transition-all ease-in-out duration-300'
                  : 'bg-white text-black'
              } hover:bg-gradient-to-l hover:scale-105 transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0} // Adjust the space between cards
        slidesPerView={3} // Default number of slides per view
        dot={false}
        loop={true} // Enables loop mode for continuous sliding
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="swiper-container py-8 px-6 md:px-16"
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween:10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {categories[selectedCategory]?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card dark:bg-indigo-900 dark:border shadow-xl rounded-xl m-2 text-center hover:scale-105 duration-300 ease-out">
              <div className="image-container mb-4">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold ">{slide.title}</h3>
              <p className="mb-2 text-base">
                {slide.text}
              </p>
              <button onClick={()=> navigate('/Maintenance')}
              className="bg-gradient-to-r mb-3 text-sm from-indigo-800 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Positioned on the Sliders */}
      <div className="absolute top-[60%] left-2 transform z-10">
        <button className="swiper-button-prev text-indigo-600 hover:text-white transition">
        </button>
      </div>
      <div className="absolute top-[60%] right-2 transform z-10">
        <button className="swiper-button-next text-indigo-500 hover:text-white transition">
        </button>
      </div>
    </div>
  );
}

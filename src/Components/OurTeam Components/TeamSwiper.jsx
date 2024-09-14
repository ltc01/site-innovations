import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { swiperData } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const TeamSwiper = () => {
  const [data, setData] = useState(swiperData);

  return (
    <>
      <div className='text-center text-xl md:text-4xl p-6 py-6 tracking-wide leading-4 font-bold'>
        Our Leaders
      </div>
      <div className="hidden p-6  md:grid h-full w-full items-center justify-around grid-cols-3 lg:grid-cols-4 gap-6">
        {
          swiperData.slice(0,8).map(el  => {
            return (
              <div className="group h-96 flip-card">
              <div className='flip-card-inner'>
                {/* Front Side (Image) */}
                <div className='flip-card-front mx-auto'>
                  <img
                    className='h-full w-80 sm:w-96 mx-auto  rounded-md object-cover'
                    src={el.image}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className='flip-card-back bg-black/50 bg-opacity-80 text-white rounded-md flex flex-col justify-center items-center '>
                <img
                    className='h-full  absolute w-80 sm:w-96 mx-auto rounded-md object-cover'
                    src={el.image}
                    alt={el.name}
                  />
                  <div className="absolute w-full h-full hover:opacity-100 backdrop-blur-md dark:bg-black/80 bg-slate/80"></div>
                  <h3 className='text-center z-10 font-sans font-medium text-sm md:text-lg'>
                    {el.name}
                  </h3>
                  <p className='text-center z-10 text-white font-bold text-xs md:text-sm'>
                    {el.role}
                  </p>
                  <div className='py-2 flex z-10 items-center justify-center gap-2'>
                    <FaLinkedin className='text-blue-600 text-xl' />
                    <FaXTwitter className='text-white' />
                  </div>
                </div>
              </div>
              </div>
            )
          })
        }


      </div>

      <div className='p-6 md:hidden'>
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className=' md:h-[350px] w-full md:w-[90%] m-auto rounded-lg  flex flex-col justify-center items-center gap-4'
        >
          {data?.map((el) => {
            return (
              <SwiperSlide
                className='relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-[160px] w-[180px] md:h-[330px] md:w-[130px] flex flex-col justify-center items-center gap-4 '
                key={el.id}
              >
                <img
                  className='h-full rounded-md object-cover w-full'
                  src={el.image}
                  alt=''
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:backdrop-blur-md  flex flex-col justify-center items-center transition-opacity duration-300 rounded-md'>
                  <h3 className='text-center text-white font-sans font-medium text-sm md:text-lg'>
                    {el.name}
                  </h3>
                  <p className='text-center text-gray-300 text-xs md:text-sm'>
                    {el.role}
                  </p>
                  <div className=' py-2 flex items-center justify-center gap-2'>
                    <FaLinkedin className='text-blue-600 text-xl text-center' />
                    <FaXTwitter className='text-black font-bold' />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

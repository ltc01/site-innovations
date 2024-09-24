import React, { useEffect } from "react";
import { useState } from "react";
import { Leaderteam1 } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";


const CommonComp = ({ heading, para, dataArray = [] }) => {



  useEffect(() => {

    gsap.fromTo('.t3',{opacity:0,y:30},
      {
        opacity:1,
        y:0,
        duration:1,
        stagger:0.3,
        ease:'power1.inOut',
        scrollTrigger:{
          trigger:'.tdiv2',
          start:'top 80%',
          end:'bottom 80%'
        }
      }
    )
    
    },[])

  return (
    <div className="tdiv2 t3 grid md:grid-cols-4 grid-col-1 p-2 mx-auto md:items-center justify-center md:flex-row  gap-2">
      <div className="pr-4">
        <h1 className=" text-center col-span-1 text-lg lg:text-2xl px-4 py-2 tracking-wide font-bold ">
          {heading}
        </h1>
        <p className="">{para}</p>
      </div>
      <div className=" md:col-span-3 col-span-1">
       
        <div>
      
          <Swiper
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            Scrollbar={{ draggable: true }}
            modules={[Keyboard, Pagination, Navigation, Scrollbar]}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 3.5,
              },
              1500: {
                slidesPerView: 4.5,
              },
            }}
            className="w-72 md:w-full h-80 mx-auto rounded-2xl flex flex-col justify-center items-center gap-6"
          >
             
            {dataArray?.map((el) => {
              return (     
            
               <SwiperSlide key={el.id} className="group flip-card">
                  <div className="flip-card-inner">
               
                    {/* Front Side (Image) */}
                    <div className="flip-card-front  rounded-2xl max-w-80 mx-auto">
                      <img
                        className="h-full w-72 mx-auto  rounded-2xl object-cover"
                        src={el.image}
                        alt={el.name}
                      />
                    </div>
                  

                    {/* Back Side (Details) */}
                    <div className="flip-card-back bg-black/90 bg-opacity-80 text-white rounded-2xl flex flex-col justify-center items-center">
                      <h3 className="text-center font-sans font-medium text-sm md:text-lg">
                        {el.name}
                      </h3>
                      <p className="text-center text-white font-bold text-xs md:text-sm">
                        {el.role}
                      </p>
                      <div className="py-2 flex items-center justify-center gap-2">
                        <FaLinkedin className="text-blue-600 text-xl" />
                        <FaXTwitter className="text-white" />
                      </div>
                    </div>
                  </div>
               
                </SwiperSlide>
          
              );
            })}
                  
          </Swiper>
       
        </div>
  
      </div>
     </div>
  );
};

export default CommonComp;

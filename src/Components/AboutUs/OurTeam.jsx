import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../../Components/OurTeam Components/teamData";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TeamComponent = () => {
  const [data, setData] = useState(swiperData);
  const cardsRef = useRef([]);

  useEffect(() => {
    
    gsap.fromTo('.sec5',
      {
        opacity:0,
        y:30
      },
      {
        opacity:1,
        y:0,
        duration:1,
        ease:'power1.out',
        stagger:0.2,
        scrollTrigger:{
          trigger:'.secdiv5',
          start:'top 70%',
          end:'bottom 80%'
        }
      }
    )


  }, []);

  return (
    <div className="secdiv5 team-component">
      <div className="sec5 text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
        Our <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Team</span>
      </div>

      <div className="sec5 p-6">
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
            1024: { slidesPerView: 4 },
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized")}
          className="md:h-[350px] w-full md:w-[90%] m-auto flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el, index) => (
            <SwiperSlide
              key={el.id}
              ref={(el) => (cardsRef.current[index] = el)} // Assigning ref to each card
              className="group rounded-xl flip-card w-96 h-72 overflow-hidden"
            >
              <div className="flip-card-inner">
                {/* Front Side (Image) */}
                <div className="flip-card-front">
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={el.image}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back bg-black/90 text-white rounded-md flex flex-col justify-center items-center">
                  <h3 className="text-center font-sans font-bold text-xl text-indigo-500">
                    {el.name}
                  </h3>
                  <p className="text-center italic text-sm">({el.role})</p>
                  <div className="py-2 mb-4 flex items-center justify-center gap-2">
                    <FaLinkedin className="" />
                    <FaXTwitter className="" />
                  </div>
                  <p className="text-xs text-center px-4">
                    {el.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamComponent;

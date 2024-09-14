import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

// Import JSON data
import cards from './cards.json';
import swiperSettings from './SwiperSettings.json';

export default function App() {
  return (
    
      <Swiper
        effect={swiperSettings.effect}
        grabCursor={swiperSettings.grabCursor}
        modules={[EffectCards, Autoplay]}
        autoplay={swiperSettings.autoplay}
        className={`w-full h-full md:w-80 md:h-96 lg:w-100 lg:h-120`}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex items-center justify-center rounded-xl text-white"
            style={{ height:'100%' ,width:'100%',
              backgroundImage: card.backgroundImage ? `url(${card.backgroundImage})` : 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    
  );
}


import React, { useState } from "react";
import { AdverseTeam } from "./teamData";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CommonComp from "./CommonComp";

export const Advertiseteam = () => {
  const [advTeam, setAdvTeam] = useState(AdverseTeam);
  return (
        
        <>
        <CommonComp heading={'Advertistment Team'} dataArray={advTeam}/>
      </>
  );
};

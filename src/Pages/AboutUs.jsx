import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
import ValueCard from "../Components/AboutUs/ValueCard";
import HeroCard from "../Components/AboutUs/HeroCard";
import ProgressBar from "../Components/AboutUs/ProgressBar";
//import OurTeam from "./OurTeamSlide"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Subcription from "../Components/Home/Subcription";
// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import aboutus1 from "../assets/aboutus (1).jpg";
import aboutus2 from "../assets/aboutus (2).jpg";
import aboutus3 from "../assets/aboutus (3).jpg";
import aboutus4 from "../assets/aboutus (4).jpg";
import aboutus5 from "../assets/aboutus (5).jpg";
import Liam from "../assets/Liam.png";
import Henrik from "../assets/Henrik.png";
import Sylphie from "../assets/Sylphie.png";
import {
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineCode, AiOutlineClockCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import OurTeam from "../Components/AboutUs/OurTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import Testimonials from "../Components/Testmonials/Testimonials";
import Timeline from "../Components/AboutUs/Timeline";
import { Mission, Vision } from "../assets/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutUs = () => {
  document.title = "Baoiam - About Us";
  const [data, setData] = useState(swiperData);
  
  useEffect(() => {
    
    gsap.fromTo(
      ".image-container img",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.inOut" }
    );

   
    gsap.fromTo(
      ".content-overlay p",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".content-overlay h2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".content-overlay .lg\\:text-lg",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      ".animediv1 h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 h2",
          start: "top 80%", // Starts when the top of h2 is 80% of the viewport
          toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        },
      }
    );

    // Animate the image
    gsap.fromTo(
      ".animediv1 img",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 img",
          start: "top 80%", // Starts when the image comes into view
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the text elements (h4, p, span) with stagger
    gsap.fromTo(
      ".animediv1 h4, .animediv1 p, .animediv1 span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".animediv1 h4",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

   
    gsap.fromTo(
      ".animediv1 img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 img",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".animediv1 h4, .animediv1 p, .animediv1 span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".animediv1 h4",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".core-values-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".core-values-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

   
    gsap.fromTo(
      ".value-card-1",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-2",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-3",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-4",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
 

  return (
    <div>
      {/* Section - 1 */}
      <div className="mx-auto w-full text-white">
      <div className="relative mx-auto h-[20%] w-full text-white">
        <div className="h-[100vh] md:h-[75vh] w-full image-container">
          <img
            className="w-full h-full opacity-90 object-cover"
            src={aboutus4}
            alt="image"
          />
        </div>
        <div className="absolute inset-0 content-overlay bg-gradient-to-b from-black/60 via-black/50 md:px-48 to-black/25 flex flex-col gap-4 items-center sm:pt-20 md:pt-32 justify-center sm:justify-start text-white">
          <p className="rounded-3xl md:py-1 px-4 w-fit bg-gradient-to-r from-pink-500 text-center to-violet-600 z-10">
            <span className="text-[0.55rem] md:text-sm font-medium">
            Redefining education with advance edtech learning 
            </span>
          </p>
          <h2 className="text-3xl md:px-28 font-extrabold mb-3 text-center lg:text-5xl">
            Join Us on a Journey to Be{" "}
            <span className="bg-gradient-to-r from-teal-300 italic tracking-wider to-amber-300 bg-clip-text text-transparent">
              One In A Million!
            </span>
          </h2>
          <p className="font-medium text-sm px-8 lg:text-lg text-center">
          Our platform is committed to delivering high standards  and skills sharpening courses. We believe in empowering every individual who connects with us on this industry driven journey, helping them stand out from millions. We are here to support them in achieving their  professional goals.
          </p>
        </div>
      </div>
    </div>

      {/* Section - 2 */}
      <div className="animediv1 w-full px-4 my-12 lg:my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-[100%] md:w-[20%] px-4 lg:px-0">
            <img
              src={Mission}
              alt="image"
              className="w-full h-full rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
            <span className="text-indigo-600 font-medium text-xs lg:text-sm">
            Inspiring Growth, one aim at a time
            </span>
            <h4 className="mt-2 text-lg lg:text-2xl font-semibold">
            Providing access to exceptional Courses to help achieve greater success.
            </h4>

            <p className="text-xs lg:text-base text-slate-600 mt-4">
            Every individual shines with their unique expertise. Discover your skills in depth with us. Our transformative courses will equip you either upgraded version of yourself, ensuring you never fall behind in life. 
            </p>
          </div>
        </div>
      </div>

      <div className="animediv1 w-full mx-auto px-4 mt-20 ">
        <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
            Vision
          </span>
        </h2>

        <div className="flex flex-col mx-auto md:flex-row-reverse justify-center items-center w-full">
          <div className="w-[100%] md:w-[25%] px-4 lg:px-0">
            <img
              src={Vision}
              alt="image"
              className="w-full h-full rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] md:shadow-[20px_25px_#4338ca]"
            />
          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
            <span className="text-indigo-600 font-medium text-xs lg:text-sm">
            Future-focused education for Success
            </span>
            <h4 className="mt-2 text-lg lg:text-2xl font-semibold">
              Preparing the next Gen to tackle upcoming challenges 
            </h4>

            <p className="text-xs lg:text-base text-slate-600 mt-4">
              {" "}
              We are not in the old generation; we are in modern Era where technology changes in minutes and trends shifts in seconds. Surviving here Without skills is nearly impossible, but baoiam has your back. In this modern landscape, baoaim is committed to preparing students to tackle upcoming challenges with high quality education.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col items-center gap-4 mx-auto px-4 sm:px-16 py-20 xl:px-20">
      <div className="w-full text-center core-values-heading">
        <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Core{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Values
          </span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="value-card-1">
          <ValueCard
            Icon={FaHandsHelping}
            title="Standard Education "
            description="Delivering standardized quality through expert professors."
          />
        </div>
        <div className="value-card-2">
          <ValueCard
            Icon={FaEye}
            title="Acceptance"
            description="Join us and enjoy lifetime access to out resources and educational benefits."
          />
        </div>
        <div className="value-card-3">
          <ValueCard
            Icon={FaLightbulb}
            title="Innovation with creativity"
            description="Continuously delivering and adapting to meet industry demand with innovative courses."
          />
        </div>
        <div className="value-card-4">
          <ValueCard
            Icon={FaChartLine}
            title="Students accomplishment"
            description="We are dedicated to students' success, providing it above all else to make it reality."
          />
        </div>
      </div>
    </div>

      {/* how it started */}

      <Timeline />

      {/* team */}

      {/* <TeamSwiper /> */}
      <OurTeam />

      {/* USP */}

      {/* <div className="flex flex-col items-start gap-4 lg:py-10 mb-10 mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">
            What Makes Us Different
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 w-full">
          <ValueCard
            Icon={FaHandsHelping}
            title="Expert-Led Learning"
            description="Every course is designed and taught by industry leaders."
          />
          <ValueCard
            Icon={FaEye}
            title="Career-Focused Curriculum"
            description="Our courses are tailored to equip you with the skills needed to land your dream job."
          />
          <ValueCard
            Icon={FaLightbulb}
            title="Flexible Learning Paths"
            description="Learn at your own pace, from anywhere, anytime"
          />

          <ValueCard
            Icon={FaChartLine}
            title="Affordable Education"
            description="High-quality courses without the heavy price tag."
          />
        </div>
      </div> */}

      {/* testimonial */}
      <Testimonials />

      {/* Section 6 */}
      {/* <OurTeam /> */}
      <Subcription />
    </div>
  );
};

export default AboutUs;

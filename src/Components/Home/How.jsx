import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoGear, GoProjectRoadmap, GoGlobe } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";



const How = () => {
  // const iconBoxesRef = useRef([]);


  useEffect(() => {
    // Ensure GSAP targets are correctly referenced
    // if (iconBoxesRef.current.length > 0) {
    //   iconBoxesRef.current.forEach((el, index) => {
    //     gsap.fromTo(
    //       el,
    //       { opacity: 0, y: 50 }, // Initial state
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1.2,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: el, // Each icon box will be triggered when it comes into view
    //           start: "top 80%", // When 85% of the element is in view
    //           end: "bottom 60%", // Animation completes when 60% of the element is in view
    //           toggleActions: "play none none reverse", // Trigger actions
    //           markers: false, // Set to true for debugging markers
    //         },
    //       }
    //     );
    //   });
    // }






const tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.Homediv1',
    start:'top 40%',
  }
})

tl.fromTo('.Homeanime-1',{
  opacity:0,
  y:30
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',
  stagger:0.2,
})


tl.fromTo('.Home-anime1',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',

},'-=0.5')

tl.fromTo('.Home-anime2',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',

},
'-=0.4')

tl.fromTo('.Home-anime3',{
  opacity:0,
  y:30,
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',
},
'-=0.3'
)

 }, []);

  return (
    <>
      <div className="Homediv1 flex justify-center xl:-mt-10 w-full h-full">
        <div className="w-[80%] text-center">
          <h1 className="Homeanime-1 text-3xl sm:text-4xl my-5 font-extrabold">
            Our {" "}
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Workflow
            </span>
          </h1>
          <p className="Homeanime-1 text-xs md:text-base mx-auto text-slate-600 dark:text-slate-300 w-full lg:w-[80%]">
            We provide the most in demand courses, accompanied by professional mentors and guidance at every stage. After a successful learning program, we offer placements support, ensuring assistance continues even after the courses conclude.
          </p>
        </div>
      </div>

      <div className="Home-anime1 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 w-full px-10 xl:px-16 mt-10 mb-[4rem] mx-auto">
        <IconBox
          icon={<GoGear />}
          title="Professional Mentorship"
          text="Boost your career with right guidance from top notch experts"
        />
        <IconBox
          icon={<IoPeopleOutline />}
          title="Group Collaboration"
          text="You can participate in group discussions where your opinions are valued, heard and implemented.           "
        />
        <IconBox
          icon={<GoProjectRoadmap />}
          title="Real-Time Projects"
          text="After completing theoretical knowledge, you will receive practical, hands-experience while working on live projects"
        />
        <IconBox
          icon={<HiOutlineRocketLaunch />}
          title="Placement Assistance"
          text="Learn how to ace any interview with our comprehensive placement assistance program."
        />
        <IconBox
          icon={<GoGlobe />}
          title="Relationship Building"
          text="Discover how to build valuable connections and access funding support."
        />
      </div>
    </>
  );
};

const IconBox = React.forwardRef(({ icon, title, text }, ref) => (
  <div className="text-center mx-auto w-full my-2">
    <div className="text-4xl flex justify-center mb-4">
      <div className="Home-anime1 rounded-full p-3 text-indigo-500 border-indigo-500 border-2">
        {icon}
      </div>
    </div>
    <h2 className="text-lg font-semibold mb-2 Home-anime2">{title}</h2>
    <p className="text-sm tracking-tight Home-anime3">{text}</p>
  </div>
));

export default How;
